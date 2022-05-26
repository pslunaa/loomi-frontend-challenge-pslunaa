import { useEffect, useState } from "react";
import CardInfo from "../../../../components/CardInfo";
import api from "../../../../services";


interface Alert {
  value: number;
  type: string;
  since: string;
}

const AlertMaintenance = () => {
  const [alert, setAlert] = useState<Alert[]>([]);

  useEffect(() => {
    api.get<Alert[]>("/alerts").then((response) => {
      setAlert(response.data);
    });
  }, []);

  const alertView = alert?.find(
    (alert) => alert.type === "Produtos em manutenção"
  );

  const acceptDateFromPromise = (date: Date | string | undefined) => {
    if (typeof date === "string") {
      return new Date(date);
    }
  };

  const today = new Date();
  const since = acceptDateFromPromise(alertView?.since);

  const getDays = (today: Date, since?: Date) => {
    if (since) {
      const diff = today.getTime() - since.getTime();
      const days = Math.floor(diff / (1000 * 3600 * 24));
      return days;
    }
  };

  return (
    <CardInfo
      title="Produtos em manutenção"
      alert
      spread={getDays(today, since)}
      value={`${alertView?.value} produtos`}
    />
  );
};

export default AlertMaintenance;
