import CardInfo from "../../../../components/CardInfo";
import { useData } from "../../../../contexts/dataContext";

const ConvertionFunnel = () => {
  const {dataInfo} = useData()

  let conversionResume: any = []

  if(!!dataInfo[11]){
    conversionResume = dataInfo[11]
  }
  

  return (
    <>
      <CardInfo
        title="Sessões"
        spread={conversionResume["total-per-day"]?.growth}
        value={`${conversionResume["total-per-day"]?.value} visualizações`}
        description="em relação a ontem"
      />
      <CardInfo
        title="Visualizações de produto"
        spread={conversionResume["products-view-per-month"]?.growth}
        value={`${conversionResume["products-view-per-month"]?.value} visualizações`}
        description="em relação a julho"
      />
      <CardInfo
        title="Conversão para a página de produtos"
        spread={conversionResume["product-page-conversion-per-month"]?.growth}
        value={`${conversionResume["product-page-conversion-per-month"]?.value} %`}
        description="em relação a julho"
      />
      <CardInfo
        title="Adições ao carrinho"
        spread={conversionResume["add-to-cart-per-month"]?.growth}
        value={`${conversionResume["add-to-cart-per-month"]?.value} produtos`}
        description="em relação a julho"
      />
      <CardInfo
        title="Checkout - Frete"
        spread={conversionResume["checkout-shipping-per-month"]?.growth}
        value={`${conversionResume["checkout-shipping-per-month"]?.value} usuários`}
        description="em relação a julho"
      />
      <CardInfo
        title="Checkout - Email"
        spread={conversionResume["checkout-email-per-month"]?.growth}
        value={`${conversionResume["checkout-email-per-month"]?.value} usuários`}
        description="em relação a julho"
      />
      <CardInfo
        title="Checkout - Cadastro"
        spread={conversionResume["checkout-registration-per-month"]?.growth}
        value={`${conversionResume["checkout-registration-per-month"]?.value} usuários`}
        description="em relação a julho"
      />
    </>
  );
};

export default ConvertionFunnel;
