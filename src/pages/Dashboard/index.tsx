import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import curvesBg from "../../assets/CurvePatterns.svg";
import { theme } from "../../styles/theme";
import { Sidebar } from "../../components/Sidebar";
import SectionRight from "./SectionRight";
import { useEffect } from "react";
import api from "../../services";

export const Dashboard = () => {

  const userInfoCall = () => {
    api
      .get("/me")
      .then((response) =>
        localStorage.setItem(
          "@loomiProject:user",
          JSON.stringify(response.data)
        )
      );
  };

  useEffect(() => {
    userInfoCall();
  },[])

  return (
    <Flex h="100vh" flexDirection="column">
      <Header />
      <Flex
        w="100vw"
        paddingBottom="40px"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage={curvesBg}
        backgroundColor={theme.colors.gray["100"]}
      >
        <Sidebar />
        <SectionRight />
      </Flex>
    </Flex>
  );
};
