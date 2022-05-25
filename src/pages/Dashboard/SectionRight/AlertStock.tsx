import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardInfo from "../../../components/CardInfo";
import api from "../../../services";
import { theme } from "../../../styles/theme";

interface Alert {
  value: number;
  type: string;
  since: string;
}

const AlertStock = () => {
  const [alertStock, setAlertStock] = useState<Alert[]>([]);

  useEffect(() => {
    api.get<Alert[]>("/alerts").then((response) => {
      setAlertStock(response.data);
    });
  }, []);

  const stockView = alertStock?.find(
    (alert) => alert.type === "Acabando o estoque"
  );

  const acceptDateFromPromise = (date: Date | string | undefined) => {
    if (typeof date === "string") {
      return new Date(date);
    }
  };

  const today = new Date();
  const since = acceptDateFromPromise(stockView?.since);

  const getDays = (today: Date, since?: Date) => {
    if (since) {
      const diff = today.getTime() - since.getTime();
      const days = Math.floor(diff / (1000 * 3600 * 24));
      return days;
    }
  };

  return (
    <CardInfo
      title="Acabando o estoque"
      description="repor o quanto antes"
      spread={getDays(today, since)}
      alert
      value={`${stockView?.value} produtos`}
    />
  );
};

export default AlertStock;
