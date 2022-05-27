import { Box, HStack, Text } from "@chakra-ui/react";
import { theme } from "../../../../styles/theme";

interface IDetail {
  color: string;
  description: string;
  status: string;
}

const ProductDetail = ({ color, description, status }: IDetail) => {
  return (
    <HStack
      display="flex"
      paddingBottom="20px"
      borderBottom="1px solid"
      w="100%"
      spacing="20"
      mt={["12px", "18px", "21px"]}
      borderBottomColor={theme.colors.gray["200"]}
      alignItems="center"
      h={["60px", "70px", "100px"]}
    >
      <Box paddingLeft="20px" w="25%">
        <Text fontSize={["14px", "16px", "18px"]}>{color}</Text>
      </Box>
      <Box w="50%">
        <Text fontSize={["9px", "12px", "16px"]}>{description}</Text>
      </Box>
      <Box w="25%">
        <Text fontSize={["14px", "16px", "18px"]}>{status}</Text>
      </Box>
    </HStack>
  );
};

export default ProductDetail;
