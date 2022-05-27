import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import api from "../services/index";
import Cookies from "js-cookie";

interface AuthProviderProps {
  children: ReactNode;
}

interface signInCredential {
  email: string;
  password: string;
}

interface AuthContextData {
  accessToken: string;
  userInfo: IUser;
  signIn: (credentials: signInCredential) => Promise<void>;
  signOut: () => void;
}

interface IUser {
  name?: string;
  avatar?: string;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState<IUser>(() => {
    const user = localStorage.getItem("@loomiProject:user");

    if (user) {
      return JSON.parse(user);
    }
    return {} as IUser;
  });
  const [token, setToken] = useState<string>(() => {
    const accessToken = Cookies.get("@loomiProject:accessToken");

    if (accessToken) {
      return accessToken;
    }

    return "";
  });


  const signIn = useCallback(async ({ email, password }: signInCredential) => {
    await api.post("/login", { email, password }).then((response) => {
      Cookies.set("@loomiProject:accessToken", response.data, {expires: 1});
      setToken(response.data);
    });
  }, []);

  const signOut = useCallback(() => {
    Cookies.remove("@loomiProject:accessToken");
    localStorage.removeItem("@loomiProject:user");
    setToken("");
  }, []);

  return (
    <authContext.Provider value={{ accessToken: token, signIn, signOut, userInfo }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
