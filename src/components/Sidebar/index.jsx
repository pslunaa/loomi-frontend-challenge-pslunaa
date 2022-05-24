import { Center, Box } from "@chakra-ui/react";
import { HiMenuAlt2 } from "react-icons/hi";
import { theme } from "../../styles/theme";

export const Sidebar = () => {
  return (
    <Box>
      <Center
        as="button"
        bg={theme.colors.white}
        borderTopRadius="8px"
        mt="16px"
        ml="16px"
        w="60px"
        h="65px"
        borderBottom="1px solid"
        borderBottomColor="gray.200"
      >
        <HiMenuAlt2 size="25" />
      </Center>
    </Box>
  );
};
