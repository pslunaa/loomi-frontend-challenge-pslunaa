import { Box, Heading } from "@chakra-ui/react";
import { ResponsivePie } from "@nivo/pie";
import { useData } from "../../../contexts/dataContext";
import { theme } from "../../../styles/theme";

const TranscationsPerClientTypeChart = () => {
  const { dataInfo } = useData();

  const valuesPerClientType = dataInfo[10]?.[
    "transactions-per-client-type"
  ].map((values: any) => values.value);

  const data = [
    {
      id: "NovoCliente",
      label: "Novo Cliente",
      value: Math.floor(valuesPerClientType?.[0]),
    },
    {
      id: "ClienteRetornando",
      label: "Cliente Retornando",
      value: Math.floor(valuesPerClientType?.[1]),
    },
  ];

  return (
    <Box
      w={["325px", "400px", "608px"]}
      bg={theme.colors.white}
      borderRadius="12px"
      h={["230px", "270px", "400px"]}
    >
      <Heading
        fontFamily={theme.fonts.body}
        fontWeight="bold"
        color={theme.colors.gray["700"]}
        fontSize={["14px", "16px", "19px"]}
        mt="16px"
        ml="35px"
      >
        Transações por tipo de cliente
      </Heading>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
        innerRadius={0.5}
        enableArcLabels={false}
        colors={[theme.colors.blue["50"], theme.colors.green["400"]]}
        arcLinkLabelsTextColor={theme.colors.white}
        arcLinkLabelsColor={theme.colors.white}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 90,
            translateY: -45,
            itemsSpacing: 8,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: theme.colors.gray["700"],
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
};

export default TranscationsPerClientTypeChart;
