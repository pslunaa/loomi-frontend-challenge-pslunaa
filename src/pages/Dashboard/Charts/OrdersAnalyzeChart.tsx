import { Box } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import api from "../../../services";
import { theme } from "../../../styles/theme";

interface IData {
  month: string;
  value: number;
}

const OrdersAnalyzeChart = () => {
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

  const [ordersRealized, setOrdersRealized] = useState<number[]>([]);
  const [ordersCanceled, setOrdersCanceled] = useState<number[]>([]);

  const getOrdersRealized = () => {
    api.get<IData[]>("/orders-per-month").then((response) => {
      setOrdersRealized(response.data.map((orderRealized) => orderRealized.value));
    });
  };

  const getOrdersCanceled = () => {
    api.get<IData[]>("/canceled-orders-per-month").then((response) => {
        setOrdersCanceled(
        response.data.map((orderCanceled) => orderCanceled.value)
      );
    });
  };

  useEffect(() => {
    getOrdersRealized();
    getOrdersCanceled();
  }, []);

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
    colors: [theme.colors.green["100"], theme.colors.purple["100"]],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      offsetX: 1,
    },
    plotOptions:{
        bar:{
            rangeBarOverlap: true
        }
    }
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