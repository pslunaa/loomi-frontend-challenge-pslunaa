import { Box } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexCharts from "react-apexcharts";
import api from "../../../services";
import { theme } from "../../../styles/theme";

interface IData {
  male: number;
  female: number;
}

interface ISessionsPerSex {
  [key: string]: IData;
}

const SessionsPerSexChart = () => {
  const [valuesPerSex, setValuesPerSex] = useState<IData>({} as IData);

  useEffect(() => {
    api.get<ISessionsPerSex>("/users-resume").then((response) => {
      setValuesPerSex(response.data["sessions-per-sex"]);
    });
  }, []);


  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      data: [valuesPerSex?.male, valuesPerSex?.female],
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
    colors: [theme.colors.brown["100"], theme.colors.blue["700"]],
    title: {
      text: "Sessões por gênero",
      margin: 30,
      offsetX: 20,
      style: {
        fontFamily: theme.fonts.body,
        fontWeight: "bold",
        color: theme.colors.gray["700"],
      },
    },
    legend:{
        show: true,
        position: "right",
        offsetX: 25,
        offsetY: 60
    },
    dataLabels:{
        enabled: false
    },
    labels: ["Masculino", "Feminino"]
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

export default SessionsPerSexChart;
