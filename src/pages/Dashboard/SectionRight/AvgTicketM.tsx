import { useEffect, useState } from "react";
import CardInfo from "../../../components/CardInfo";
import api from "../../../services";

interface AverageTicket {
  value: number;
  growth: number;
}

const AverageTicketMonth = () => {
  const [averageTicketMonth, setAverageTicketMonth] = useState(
    {} as AverageTicket
  );

  useEffect(() => {
    api.get<AverageTicket>("/avg-ticket-month").then((response) => {
      setAverageTicketMonth(response.data);
    });
  }, []);

  return (
    <CardInfo
      title="Ticket médio mensal"
      spread={averageTicketMonth.growth}
      description="em relação a julho"
      value={averageTicketMonth.value?.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}
    />
  );
};

export default AverageTicketMonth;
