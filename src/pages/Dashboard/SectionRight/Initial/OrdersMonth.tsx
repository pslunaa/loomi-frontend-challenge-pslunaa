import { useEffect, useState } from "react";
import CardInfo from "../../../../components/CardInfo";
import api from "../../../../services";

interface AverageTicket {
  value: number;
  growth: number;
}

const OrdersMonth = () => {
  const [ordersMonth, setOrdersMonth] = useState({} as AverageTicket);

  useEffect(() => {
    api.get<AverageTicket>("/orders-month").then((response) => {
      setOrdersMonth(response.data);
    });
  }, []);

  return (
    <CardInfo
      title="Pedidos realizados no mês"
      description="em relação a julho"
      spread={ordersMonth.growth}
      value={`${ordersMonth.value} pedidos`}
    />
  );
};

export default OrdersMonth;
