import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";

interface DataProviderProps {
  children: ReactNode;
}

interface DataContext {
  getAllData: () => void;
  dataInfo: any[];
}

const dataContext = createContext({} as DataContext);

const dataEndpoint = [
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-day"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-month"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/alerts"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/orders-month"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/sells-month"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/profit-per-month"),
  axios.get(
    "https://628bf017667aea3a3e387e51.mockapi.io/profit-expectation-per-month"
  ),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/orders-per-month"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/canceled-orders-per-month"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/users-resume"),
  axios.get("https://628bf017667aea3a3e387e51.mockapi.io/conversions-resume"),
];

const useData = () => {
  const context = useContext(dataContext);

  return context;
};

const DataProvider = ({ children }: DataProviderProps) => {
  const [dataInfo, setDataInfo] = useState<any[]>([]);

  const getAllData = () => {
    axios.all(dataEndpoint).then((response) => {
      setDataInfo(response.map((info) => info.data));
    });
  };

  return (
    <dataContext.Provider value={{ dataInfo, getAllData }}>
      {children}
    </dataContext.Provider>
  );
};

export { DataProvider, useData };
