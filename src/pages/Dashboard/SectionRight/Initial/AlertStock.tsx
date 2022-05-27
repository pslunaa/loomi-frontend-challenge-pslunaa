import CardInfo from "../../../../components/CardInfo";
import { useData } from "../../../../contexts/dataContext";

const AlertStock = () => {
  const { dataInfo } = useData();

  const stockView = dataInfo[2]?.find(
    (alert: any) => alert.type === "Acabando o estoque"
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
