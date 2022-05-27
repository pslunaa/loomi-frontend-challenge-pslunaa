import { Box } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useData } from "../../../contexts/dataContext";
import { theme } from "../../../styles/theme";

const OrdersAnalyzeChart = () => {
  const { dataInfo } = useData();
  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  const ordersRealized = dataInfo[8]?.map(
    (orderRealized: any) => orderRealized.value
  );
  const ordersCanceled = dataInfo[9]?.map(
    (orderCanceled: any) => orderCanceled.value
  );

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "Realizados",
      data: ordersRealized,
    },
    {
      name: "Cancelados",
      data: ordersCanceled,
    },
  ];

  const options: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    title: {
      text: "Pedidos realizados x pedidos cancelados ",
      margin: 30,
      offsetX: 20,
      style: {
        fontFamily: theme.fonts.body,
        fontWeight: "bold",
        color: theme.colors.gray["700"],
      },
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
          colors: [theme.colors.brown["400"]],
          fontFamily: theme.fonts.body,
          fontWeight: "bold",
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.colors.green["600"], theme.colors.purple["300"]],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      offsetX: 1,
    },
    plotOptions: {
      bar: {
        rangeBarOverlap: true,
      },
    },
  };

  return (
    <Box
      w={["320px", "400px", "608px"]}
      bg={theme.colors.white}
      borderRadius="12px"
    >
      <ReactApexChart options={options} type="bar" series={series} />
    </Box>
  );
};

export default OrdersAnalyzeChart;
