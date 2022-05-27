import { Box } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexCharts from "react-apexcharts";
import { useData } from "../../../contexts/dataContext";
import { theme } from "../../../styles/theme";

const TranscationsPerAgeChart = () => {
  const { dataInfo } = useData();

  const transactionsCategories = dataInfo[10]?.["transactions-per-age"].map(
    (transaction: any) => transaction.category
  );

  const valuesPerAge = dataInfo[10]?.["transactions-per-age"].map(
    (values: any) => values.value
  );

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      data: valuesPerAge,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    colors: [theme.colors.blue["700"]],
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    title: {
      text: "Transações por idade",
      margin: 30,
      offsetX: 20,
      style: {
        fontFamily: theme.fonts.body,
        fontSize: "14px",
        fontWeight: "bold",
        color: theme.colors.gray["700"],
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: transactionsCategories,
    xaxis: {
      categories: transactionsCategories,
      labels: {
        style: {
          colors: [theme.colors.brown["400"]],
          fontFamily: theme.fonts.body,
          fontWeight: "bold",
          fontSize: "10px",
        },
      },
    },
  };

  return (
    <Box
      w={["320px", "400px", "608px"]}
      bg={theme.colors.white}
      borderRadius="12px"
      h={["230px", "270px", "400px"]}
    >
      <ReactApexCharts
        width="100%"
        type="bar"
        options={options}
        series={series}
      />
    </Box>
  );
};

export default TranscationsPerAgeChart;
