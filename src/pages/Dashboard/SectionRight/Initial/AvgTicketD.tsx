import CardInfo from "../../../../components/CardInfo";
import { useData } from "../../../../contexts/dataContext";


const AverageTicketDay = () => {

  const {dataInfo} = useData()

  return (
    <CardInfo
      title="Ticket médio ultimas 24h"
      spread={dataInfo[0]?.growth}
      description="em relação a julho"
      value={dataInfo[0]?.value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}
    />
  );
};

export default AverageTicketDay;
