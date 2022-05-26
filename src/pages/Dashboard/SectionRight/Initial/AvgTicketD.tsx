import { useEffect, useState } from "react";
import CardInfo from "../../../../components/CardInfo";
import api from "../../../../services";
import { theme } from "../../../../styles/theme";

interface AverageTicket {
  value: number;
  growth: number;
}

const AverageTicketDay = () => {
  const [averageTicketDay, setAverageTicketDay] = useState({} as AverageTicket);

  useEffect(() => {
    api.get<AverageTicket>("/avg-ticket-day").then((response) => {
      setAverageTicketDay(response.data);
    });
  }, []);

  return (
    <CardInfo
      title="Ticket médio ultimas 24h"
      spread={averageTicketDay.growth}
      description="em relação a julho"
      value={averageTicketDay.value?.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}
    />
  );
};

export default AverageTicketDay;
