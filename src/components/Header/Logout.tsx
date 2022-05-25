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
import { useAuth } from "../../contexts/authContext";

interface LogoutProps {
        isOpen: boolean;
        onClose: () => void;
 
}

export const Logout = ({isOpen, onClose}: LogoutProps) => {

  const {signOut} = useAuth()
  
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt={["55px","57px", "80px"]} />
      <DrawerContent ml="auto" _hover={{bg: theme.colors.blue["50"]}} mt={["55px", "57px","80px"]} w={["100px","250px","300px"]}>
        <DrawerBody>
          <Flex as="button" onClick={signOut} align="center" _hover={{ cursor: "pointer" }}>
            <Center
              w="40px"
              h="40px"
              bg="red.500"
              fontSize="md"
              borderRadius="8px"
            >
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml="4">
              <Heading as="h3" fontSize="md">
                Logout
              </Heading>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
