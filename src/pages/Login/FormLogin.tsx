import { Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../../components/Input";
import { theme } from "../../styles/theme";

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const FormLogin = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <Box
      as="form"
      onSubmit={handleSignIn}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <VStack mt={["25px", "40px", "65px"]} spacing={["6", "8", "10"]}>
        <Input
          label="E-mail"
          type="email"
          placeholder="Digite seu email"
          hidePass={hidePass}
          setHidePass={setHidePass}
          {...register("email")}
        />
        <Input
          label="Senha"
          hidePass={hidePass}
          placeholder="Digite sua senha"
          setHidePass={setHidePass}
          type={hidePass ? "password" : "text"}
          {...register("senha")}
        />
      </VStack>
      <Button
        w="120px"
        isLoading={loading}
        h="40px"
        mt={["18px", "22px", "48px"]}
        borderRadius="8px"
        type="submit"
        fontFamily={theme.fonts.body}
        _hover={{ bg: theme.colors.blue["800"] }}
        fontWeight="normal"
        fontSize={["14px", "16px", "20px"]}
        letterSpacing="0.8px"
        color={theme.colors.white}
        bg={theme.colors.violet["700"]}
      >
        Entrar
      </Button>
    </Box>
  );
};
