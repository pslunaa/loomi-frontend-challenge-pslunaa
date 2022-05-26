import { useEffect, useState } from "react";
import CardInfo from "../../../../components/CardInfo";
import api from "../../../../services";

interface AverageTicket {
  value: number;
  growth: number;
}

const SellsMonth = () => {
  const [sellsMonth, setSellsMonth] = useState({} as AverageTicket);

  useEffect(() => {
    api.get<AverageTicket>("/sells-month").then((response) => {
      setSellsMonth(response.data);
    });
  }, []);

  return (
    <CardInfo
      title="Produtos vendidos no mês"
      description="em relação a julho"
      spread={sellsMonth.growth}
      value={`${sellsMonth.value} produtos`}
    />
  );
};

export default SellsMonth;
