import { Flex, Heading, Image } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import curvesBg from "../../assets/CurvePatterns.svg";
import Logo from "../../assets/LogoLogin.svg";
import { FormLogin } from "./FormLogin";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    setLoading(true);
    signIn(data)
      .then((_) => {
        setLoading(false);
        history.push("/dashboard");
      })
      .catch((_) => setLoading(false));
  };

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
        <FormLogin
          errors={errors}
          handleSignIn={handleSubmit((data) =>
            handleSignIn(data as SignInData)
          )}
          register={register}
          loading={loading}
        />
      </Flex>
    </Flex>
  );
};
