import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../../services";
import { ResponsivePie } from "@nivo/pie";
import { theme } from "../../../styles/theme";

interface IData {
  male: number;
  female: number;
}

interface ISessionsPerSex {
  [key: string]: IData;
}

const SessionsPerGenderChart = () => {
  const [valuesPerSex, setValuesPerSex] = useState<IData>({} as IData);

  useEffect(() => {
    api.get<ISessionsPerSex>("/users-resume").then((response) => {
      setValuesPerSex(response.data["sessions-per-sex"]);
    });
  }, []);

  const data = [
    {
      id: "Masculino",
      label: "Masculino",
      value: valuesPerSex.male,
    },
    {
      id: "Feminino",
      label: "Feminino",
      value: valuesPerSex.female,
    },
  ];

  return (
    <Box
      w={["320px", "400px", "608px"]}
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
        Sessões por gênero
      </Heading>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 100, bottom: 80, left: 80 }}
        innerRadius={0.5}
        enableArcLabels={false}
        colors={[theme.colors.brown["100"] ,theme.colors.blue["700"]]}
        arcLinkLabelsTextColor={theme.colors.white}
        arcLinkLabelsColor={theme.colors.white}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 85,
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

export default SessionsPerGenderChart;
