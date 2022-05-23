import { Button, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import curvesBg from "../../assets/CurvePatterns.svg";
import Logo from "../../assets/LogoLogin.svg";
import { Input } from "../../components/input";
import { useState } from "react";

export const Login = () => {
  const [hidePass, setHidePass] = useState(true);
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
        <VStack mt={["25px", "40px", "65px"]} spacing={["6", "8", "10"]}>
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="Digite seu email"
            hidePass={hidePass}
            setHidePass={setHidePass}
          />
          <Input
            label="Senha"
            name="password"
            hidePass={hidePass}
            placeholder="Digite sua senha"
            setHidePass={setHidePass}
            type={hidePass ? "password" : "text"}
          />
        </VStack>
        <Button
          w="120px"
          h="40px"
          mt={["18px", "22px", "48px"]}
          borderRadius="8px"
          fontFamily={theme.fonts.body}
          _hover={{ bg: theme.colors.blue["800"] }}
          fontWeight="normal"
          fontSize="20px"
          letterSpacing="0.8px"
          color={theme.colors.white}
          bg={theme.colors.violet["700"]}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
