import CardInfo from "../../../../components/CardInfo";
import { useData } from "../../../../contexts/dataContext";

const SellsMonth = () => {
  const { dataInfo } = useData();
  return (
    <CardInfo
      title="Produtos vendidos no mês"
      description="em relação a julho"
      spread={dataInfo[4]?.growth}
      value={`${dataInfo[4]?.value} produtos`}
    />
  );
};

export default SellsMonth;
