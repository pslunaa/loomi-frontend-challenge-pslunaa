import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

interface CardInfoProps {
  title: string;
  value: string;
  spread?: number;
  description?: string;
  alert?: boolean;
}

const CardInfo = ({
  title,
  spread,
  description,
  value,
  alert,
}: CardInfoProps) => {
  return (
    <Flex
      w={["150px", "190px", "232px"]}
      h={["120px", "150px", "168px"]}
      borderRadius="15px"
      bg={theme.colors.white}
      paddingY="5px"
    >
      <Flex
        justifyContent="flex-start"
        flexDirection="column"
        ml={["8px", "12px", "15px"]}
        mt={["14px", "18px", "20px"]}
      >
        <Heading
          color={theme.colors.gray["500"]}
          textAlign="left"
          fontSize={["9px", "xs", "md"]}
        >
          {title}
        </Heading>
        <Center
          w={["40px", "48px", "55px"]}
          h="23px"
          fontSize={["9px", "10px", "xs"]}
          boxShadow="0px 0px 20px #0000001A;"
          borderRadius="12px"
          color={
            spread &&
            (alert
              ? theme.colors.purple["500"]
              : spread > 0
              ? theme.colors.green["600"]
              : theme.colors.purple["500"])
          }
          fontWeight="bold"
          mt={["7px", "9px", "12px"]}
          mb="8px"
        >
          {spread &&
            (alert
              ? `Há ${spread} dias`
              : spread > 0
              ? `+${spread}%`
              : `${spread}%`)}
        </Center>
        <Text
          fontSize={["xs", "xs", "sm"]}
          mb={["5px", "14px", "16.5px"]}
          color={spread && (alert || spread < 0 ? theme.colors.purple["500"] : theme.colors.green["600"])}
        >
          {description}
        </Text>
        <Text
          fontSize={["xs", "sm", "lg"]}
          fontWeight="bold"
          color={theme.colors.gray["500"]}
          paddingBottom={["5px","8px","10px"]}
          mt={alert && !!description === false ? "18px" : "0px"}
        >
          {value}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CardInfo;
