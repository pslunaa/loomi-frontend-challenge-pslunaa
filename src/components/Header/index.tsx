import { Box, Flex, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import IconMini from "../../assets/Grupo10510.svg";
import { Logout } from "./Logout";
import { theme } from "../../styles/theme";
import { useAuth } from "../../contexts/authContext";


export const Header = () => {
  const {isOpen, onClose, onToggle} = useDisclosure()

  const {userInfo} = useAuth()

  return (
    <Flex
      h={["56px", "60px", "84px"]}
      paddingY={["5px", "8px", "12px"]}
      w="100%"
      alignItems="center"
      position="sticky"
      top="0"
      justifyContent="space-between"
      bg={theme.colors.white}
      boxShadow="0px 3px 6px #00000014"
    >
      <Image
        ml="40px"
        w={["48px", "55px", "69px"]}
        h={["38px", "45px", "59px"]}
        src={IconMini}
      />
      <HStack mr="40px">
        <Text fontSize={["12px", "14px", "16px"]} textAlign="center">
          {userInfo.name}
        </Text>
        <Box
          as="button"
          w={["25px", "30px", "40px"]}
          h={["25px", "30px", "40px"]}
          fontSize={["14px", "16px", "22px"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={onToggle}
        >
          <Image borderRadius="20px" w="100%" h="100%" src={userInfo.avatar} />
        </Box>
      </HStack>
      <Logout isOpen={isOpen} onClose={onClose}/>
    </Flex>
  );
};
