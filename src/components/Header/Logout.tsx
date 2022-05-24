import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { FiLogOut } from "react-icons/fi";

interface LogoutProps {
        isOpen: boolean;
        onClose: () => void;
 
}

export const Logout = ({isOpen, onClose}: LogoutProps) => {
  
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt={["55px","57px", "80px"]} />
      <DrawerContent ml="auto" mt={["55px", "57px","80px"]} w={["200px","250px","300px"]}>
        <DrawerBody>
          <Flex align="center" _hover={{ cursor: "pointer" }}>
            <Center
              w="60px"
              h="60px"
              bg="red.500"
              fontSize="2xl"
              borderRadius="8px"
            >
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml="4">
              <Heading as="h3" fontSize="18px">
                Logout
              </Heading>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
