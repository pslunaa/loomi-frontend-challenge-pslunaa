import { Flex, Heading, Image} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import curvesBg from "../../assets/CurvePatterns.svg";
import Logo from "../../assets/LogoLogin.svg";
import { FormLogin } from "./FormLogin";


export const Login = () => {
  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor={theme.colors.gray["100"]}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundImage={curvesBg}
    >
      <Flex
        w={["400px", "550px", "894px"]}
        h="100vh"
        bg={theme.colors.white}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image
          src={Logo}
          w={["120px", "200px", "264px"]}
          h={["150px", "170px", "226px"]}
        />
        <Heading
          as="h2"
          fontSize={["16px", "18px", "20px"]}
          fontFamily="Nunito Sans"
          mt="43px"
        >
          Entrar na plataforma
        </Heading>
       <FormLogin/>
      </Flex>
    </Flex>
  );
};
