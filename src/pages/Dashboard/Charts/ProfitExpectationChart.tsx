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

const ProfitExpectationChart = () => {
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

  const [profitReal, setProfitReal] = useState<number[]>([]);
  const [profitExpectation, setProfitExpectation] = useState<number[]>([]);

  const getProfitReal = () => {
    api.get<IData[]>("/profit-per-month").then((response) => {
      setProfitReal(response.data.map((profitReal) => profitReal.value));
    });
  };

  const getProfitExpectation = () => {
    api.get<IData[]>("/profit-expectation-per-month").then((response) => {
      setProfitExpectation(
        response.data.map((profitExpec) => profitExpec.value)
      );
    });
  };

  useEffect(() => {
    getProfitReal();
    getProfitExpectation();
  }, []);

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "Real",
      data: profitReal,
    },
    {
      name: "Expectativa",
      data: profitExpectation,
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
      text: "Expectativa lucro x lucro real ",
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
      offsetX: 1
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

export default ProfitExpectationChart;
