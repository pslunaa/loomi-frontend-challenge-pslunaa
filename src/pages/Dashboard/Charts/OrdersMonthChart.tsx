import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import api from "../../../services";
import { theme } from "../../../styles/theme";

interface OrdersMonth {
  value: number;
  month: number;
}

const OrdersMonthChart = () => {
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

  const [ordersMonth, setOrdersMonth] = useState<number[]>([]);
  const [month, setMonth] = useState<String[]>([]);

  useEffect(() => {
    api.get<OrdersMonth[]>("/sells-per-month").then((response) => {
      setOrdersMonth(response.data.map((monthValues) => monthValues.value));
      setMonth(response.data.map((month) => months[month.month]));
    });
  }, []);

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "Pedidos",
      data: ordersMonth,
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
      categories: month,
      labels:{
          style:{
              colors: [theme.colors.brown["400"]],
              fontFamily: theme.fonts.body,
              fontWeight: "bold",
              fontSize: "10px"
          }
      }
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
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width="100%"
      />
    </>
  );
};

export default OrdersMonthChart;
