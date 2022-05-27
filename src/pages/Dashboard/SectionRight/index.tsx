import { Flex, Grid, Heading } from "@chakra-ui/react";
import { theme } from "../../../styles/theme";
import AlertMaintenance from "./Initial/AlertMaintenance";
import AlertStock from "./Initial/AlertStock";
import AverageTicketDay from "./Initial/AvgTicketD";
import AverageTicketMonth from "./Initial/AvgTicketM";
import OrdersMonthChart from "../Charts/OrdersMonthChart";
import OrdersMonth from "./Initial/OrdersMonth";
import SellsMonth from "./Initial/SellsMonth";
import ConvertionFunnel from "./ConvertionFunnel";
import TranscationsPerAgeChart from "../Charts/TransactionsPerAge";
import SessionsPerGenderChart from "../Charts/SessionsPerGender";
import TranscationsPerClientTypeChart from "../Charts/TransactionsPerClientTypeChart";
import ProfitExpectationChart from "../Charts/ProfitExpectationChart";
import OrdersAnalyzeChart from "../Charts/OrdersAnalyzeChart";
import ProductList from "./ProductList";

const SectionRight = () => {
  return (
    <Grid>
      <Grid w="100vw" mt={["25px", "35px", "45px"]}>
        <Heading
          ml="20px"
          color={theme.colors.gray["500"]}
          mb="15px"
          fontSize={["18px", "22px", "28px"]}
        >
          Início
        </Heading>
        <Flex w={["850px", "1100px", "1552px"]} gap={["15px", "20px", "32px"]}>
          <AverageTicketDay />
          <AverageTicketMonth />
          <AlertMaintenance />
          <AlertStock />
          <OrdersMonth />
          <SellsMonth />
        </Flex>
      </Grid>
      <Heading
        ml="20px"
        color={theme.colors.violet["700"]}
        mt="20px"
        mb="12px"
        fontSize={["18px", "22px", "28px"]}
      >
        Dashboard de vendas
      </Heading>
      <Grid
        overflowX="scroll"
        paddingRight="20px"
        mt={["15px", "25px", "40px"]}
      >
        <Flex w={["1200px", "1390px", "2100px"]} gap={["15px", "20px", "32px"]}>
          <OrdersMonthChart />
          <ProfitExpectationChart />
          <OrdersAnalyzeChart />
        </Flex>
      </Grid>
      <Heading
        ml="20px"
        mt="20px"
        color={theme.colors.violet["700"]}
        mb="15px"
        fontSize={["18px", "22px", "28px"]}
      >
        Funil de Conversão
      </Heading>
      <Grid overflowX="scroll" mt={["15px", "25px", "40px"]}>
        <Flex w={["1300px" ,"1600px", "1550px"]} gap={["15px", "20px", "32px"]}>
          <ConvertionFunnel />
        </Flex>
      </Grid>
      <Heading
        ml="20px"
        mt="20px"
        color={theme.colors.violet["700"]}
        mb="15px"
        fontSize={["18px", "22px", "28px"]}
      >
        Perfil do usuário
      </Heading>
      <Grid mt={["15px", "25px", "40px"]}>
        <Flex gap={["15px", "20px", "32px"]}>
          <TranscationsPerAgeChart />
          <SessionsPerGenderChart />
          <TranscationsPerClientTypeChart />
        </Flex>
      </Grid>
      <Grid>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default SectionRight;
