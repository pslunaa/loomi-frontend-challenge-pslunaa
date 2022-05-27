import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { theme } from "../../../styles/theme";
import { Box } from "@chakra-ui/react";
import { useData } from "../../../contexts/dataContext";

const OrdersMonthChart = () => {
  const {dataInfo} = useData()
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

  const dataChart = dataInfo[5]?.map((monthValues:any) => monthValues.value)
 
  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "Pedidos",
      data: dataChart,
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "bar-chart",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    title: {
      text: "Pedidos por mês",
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
      labels:{
          style:{
              colors: [theme.colors.brown["400"]],
              fontFamily: theme.fonts.body,
              fontWeight: "bold",
              fontSize: "10px"
          }
      },
    },
    yaxis:{
      labels:{
          show: false
      }  
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.colors.blue["700"]],
    plotOptions: {
      bar: {
        borderRadius: 3,
        colors: {
          backgroundBarOpacity: 1,
        },
      },
    },
  };
  return (
    <Box
    w={["320px", "400px", "608px"]}
    bg={theme.colors.white}
    borderRadius="12px"
  >
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width="100%"
      />
    </Box>
  );
};

export default OrdersMonthChart;
