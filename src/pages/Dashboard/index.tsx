import { Flex } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import curvesBg from "../../assets/CurvePatterns.svg";
import { theme } from "../../styles/theme";
import { Sidebar } from "../../components/Sidebar";

export const Dashboard = () => {
return (
    <Flex
    h="100vh"
    backgroundColor={theme.colors.gray["100"]}
    flexDirection="column"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundImage={curvesBg}
  >
        <Header/>
        <Sidebar/>
    </Flex>
)

}