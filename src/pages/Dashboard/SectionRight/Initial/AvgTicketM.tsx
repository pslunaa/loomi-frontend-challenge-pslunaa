import CardInfo from "../../../../components/CardInfo";
import { useData } from "../../../../contexts/dataContext";

const AverageTicketMonth = () => {
  const {dataInfo} = useData()
  
  return (
    <CardInfo
      title="Ticket médio mensal"
      spread={dataInfo[1]?.growth}
      description="em relação a julho"
      value={dataInfo[1]?.value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}
    />
  );
};

export default AverageTicketMonth;
