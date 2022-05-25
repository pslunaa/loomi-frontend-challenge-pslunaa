import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import curvesBg from "../../assets/CurvePatterns.svg";
import { theme } from "../../styles/theme";
import { Sidebar } from "../../components/Sidebar";
import SectionRight from "./SectionRight";
import { useEffect } from "react";
import api from "../../services";

export const Dashboard = () => {
  useEffect(() => {
    api.get("/me").then((response) => {
      localStorage.setItem("@loomiProject:user", response.data);
    });
  }, []);

  const user = JSON.parse(localStorage.getItem("@loomiProject:user") || "");

  return (
    <Flex
      h="100vh"
      backgroundColor={theme.colors.gray["100"]}
      flexDirection="column"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundImage={curvesBg}
    >
      <Header name={user?.name} avatar={user?.avatar} />
      <Flex>
        <Sidebar />
        <SectionRight />
      </Flex>
    </Flex>
  );
};
