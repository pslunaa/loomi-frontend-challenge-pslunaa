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
  signIn: (credentials: signInCredential) => Promise<void>;
  signOut: () => void;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>(() => {
    const accessToken = Cookies.get("@loomiProject:accessToken");

    if (accessToken) {
      return accessToken;
    }

    return "";
  });

  const signIn = useCallback(async ({ email, password }: signInCredential) => {
    await api.post("/login", { email, password }).then((response) => {
      Cookies.set("@loomiProject:accessToken", response.data);
      setToken(response.data);
    });
  }, []);

  const signOut = useCallback(() => {
    Cookies.remove("@loomiProject:accessToken");
    setToken("");
  }, []);

  return (
    <authContext.Provider value={{ accessToken: token, signIn, signOut }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
