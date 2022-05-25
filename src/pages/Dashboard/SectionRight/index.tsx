import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { theme } from "../../../styles/theme";
import AlertMaintenance from "./AlertMaintenance";
import AlertStock from "./AlertStock";
import AverageTicketDay from "./AvgTicketD";
import AverageTicketMonth from "./AvgTicketM";
import OrdersMonthChart from "../Charts/OrdersMonthChart";
import OrdersMonth from "./OrdersMonth";
import SellsMonth from "./SellsMonth";

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
        <Flex w={["850px", "1120px", "1552px"]} gap={[ "15px","20px","32px"]}>
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
        <Box
          w={["320px", "400px", "608px"]}
          bg={theme.colors.white}
          borderRadius="12px"
        >
          <OrdersMonthChart />
        </Box>
      </Grid>
    </Box>
  );
};

export default SectionRight;
