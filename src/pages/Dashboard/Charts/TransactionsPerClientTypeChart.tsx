import { Box } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexCharts from "react-apexcharts";
import api from "../../../services";
import { theme } from "../../../styles/theme";

interface IData {
  category: string;
  value: number;
}

interface TransactionsPerClientType {
  [key: string]: IData[];
}

const TranscationsPerClientTypeChart = () => {
  const [transationsClientType, setTransactionsClientType] = useState<string[]>(
    []
  );

  const [valuesPerClientType, setValuesPerClientType] = useState<number[]>([]);

  useEffect(() => {
    api.get<TransactionsPerClientType>("/users-resume").then((response) => {
      setTransactionsClientType(
        response.data["transactions-per-client-type"].map(
          (clientType) => clientType.category
        )
      );
      setValuesPerClientType(
        response.data["transactions-per-client-type"].map((values) => values.value)
      );
    });
  }, []);

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      data: valuesPerClientType,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    colors: [theme.colors.blue["50"], theme.colors.green["400"]],
    title: {
      text: "Transações por tipo de cliente",
      margin: 30,
      offsetX: 20,
      style: {
        fontFamily: theme.fonts.body,
        fontWeight: "bold",
        color: theme.colors.gray["700"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Novo cliente", "Cliente retornando"],
    legend:{
        show: true,
        position: "right",
        offsetX: 25,
        offsetY: 60
    }
  };

  return (
    <Box
      w={["320px", "400px", "608px"]}
      bg={theme.colors.white}
      borderRadius="12px"
    >
      <ReactApexCharts
        width="100%"
        type="donut"
        options={options}
        series={series}
      />
    </Box>
  );
};

export default TranscationsPerClientTypeChart;