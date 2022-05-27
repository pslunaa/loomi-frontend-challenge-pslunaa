import { Center, Flex, Image, VStack } from "@chakra-ui/react";
import { HiMenuAlt2 } from "react-icons/hi";
import { theme } from "../../styles/theme";
import Home from "../../assets/home.svg";
import Cat from "../../assets/cat.svg";
import Buy from "../../assets/Buy.svg";
import Card from "../../assets/card.svg";
import Gear from "../../assets/gear.svg";
import Log from "../../assets/log.svg";
import Person from "../../assets/person.svg";
import Services from "../../assets/services.svg";
import Text from "../../assets/text.svg";

export const Sidebar = () => {
  return (
    <Flex
      bg={theme.colors.white}
      borderRadius="8px"
      alignItems="center"
      flexDirection="column"
      paddingBottom={["100px", "200", "290px"]}
      mt="20px"
      ml="16px"
      mr="30px"
      w="45px"
      h={["700px", "800px", "964px"]}
    >
      <Center
        borderBottom="1px solid"
        h="55px"
        w="45px"
        borderBottomColor="#E0E0E0"
      >
        <HiMenuAlt2 size="23" />
      </Center>
      <VStack spacing="5">
        <Center
          mt="20px"
          h="25px"
          w="25px"
          bg={theme.colors.violet["700"]}
          borderRadius="6px"
        >
          <Image src={Home} w="15px"/>
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Cat} />
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Services} />
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Log} />
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Buy} />
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Card} />
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Text} />
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Person} />
        </Center>
        <Center
          h="40px"
          w="40px"
          bg="transparent"
          borderRadius="6px"
        >
          <Image src={Gear} />
        </Center>
      </VStack>
    </Flex>
  );
};
