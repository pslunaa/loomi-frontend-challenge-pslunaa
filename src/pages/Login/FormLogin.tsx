import { Box, Button, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { Input } from "../../components/Input"
import { theme } from "../../styles/theme"

export const FormLogin = () => {
    const [hidePass, setHidePass] = useState(true);
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
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
        fontSize={["14px", "16px","20px"]}
        letterSpacing="0.8px"
        color={theme.colors.white}
        bg={theme.colors.violet["700"]}
      >
        Entrar
      </Button>
      </Box>
    )
}