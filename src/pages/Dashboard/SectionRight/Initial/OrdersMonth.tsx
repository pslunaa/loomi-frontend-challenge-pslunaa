import CardInfo from "../../../../components/CardInfo";
import { useData } from "../../../../contexts/dataContext";

const OrdersMonth = () => {
  const { dataInfo } = useData();

  return (
    <CardInfo
      title="Pedidos realizados no mês"
      description="em relação a julho"
      spread={dataInfo[3]?.growth}
      value={`${dataInfo[3]?.value} pedidos`}
    />
  );
};

export default OrdersMonth;
