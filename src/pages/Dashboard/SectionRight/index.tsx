import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { theme } from "../../../styles/theme";
import AlertMaintenance from "./Initial/AlertMaintenance";
import AlertStock from "./Initial/AlertStock";
import AverageTicketDay from "./Initial/AvgTicketD";
import AverageTicketMonth from "./Initial/AvgTicketM";
import OrdersMonthChart from "../Charts/OrdersMonthChart";
import OrdersMonth from "./Initial/OrdersMonth";
import SellsMonth from "./Initial/SellsMonth";
import ConvertionFunnel from "./convertionFunnel";
import TranscationsPerAgeChart from "../Charts/TransactionsPerAge";
import SessionsPerSexChart from "../Charts/SessionsPerSex";
import TranscationsPerClientTypeChart from "../Charts/TransactionsPerClientTypeChart";

const SectionRight = () => {
  return (
    <Box>
      <Grid w="100vw" mt={["25px", "35px", "45px"]}>
        <Heading
          ml="20px"
          color={theme.colors.gray["500"]}
          mb="15px"
          fontSize={["18px", "22px", "28px"]}
        >
          Início
        </Heading>
        <Flex w={["auto", "auto", "auto"]} gap={["15px", "20px", "32px"]}>
          <AverageTicketDay />
          <AverageTicketMonth />
          <AlertMaintenance />
          <AlertStock />
          <OrdersMonth />
          <SellsMonth />
        </Flex>
      </Grid>
      <Grid mt="15px">
        <Heading
          ml="20px"
          color={theme.colors.violet["700"]}
          mb="15px"
          fontSize={["18px", "22px", "28px"]}
        >
          Dashboard de vendas
        </Heading>
        <Flex>
          <OrdersMonthChart />
        </Flex>
      </Grid>
      <Grid mt="15px">
        <Heading
          ml="20px"
          color={theme.colors.violet["700"]}
          mb="15px"
          fontSize={["18px", "22px", "28px"]}
        >
          Funil de Conversão
        </Heading>
        <Flex w={["auto", "auto", "auto"]} gap={["15px", "20px", "32px"]}>
          <ConvertionFunnel />
        </Flex>
      </Grid>
      <Grid mt="15px">
        <Heading
          ml="20px"
          color={theme.colors.violet["700"]}
          mb="15px"
          fontSize={["18px", "22px", "28px"]}
        >
          Perfil do usuário
        </Heading>
        <Flex gap={["15px", "20px", "32px"]}>
          <TranscationsPerAgeChart />
          <SessionsPerSexChart />
          <TranscationsPerClientTypeChart />
        </Flex>
      </Grid>
    </Box>
  );
};

export default SectionRight;
