import { Box, Image, Text } from "@chakra-ui/react";

import imageMock from "../../assets/Imagem2.png";
import { theme } from "../../styles/theme";

interface IProduct {
  name: string;
  src?: string;
}

const Product = ({ name, src = imageMock }: IProduct) => {
  return (
    <Box
      display="flex"
      paddingBottom="20px"
      borderBottom="1px solid"
      w="100%"
      mt={["12px","18px","21px"]}
      borderBottomColor={theme.colors.gray["200"]}
      alignItems="center"
      h={["60px", "70px", "100px"]}
    >
      <Image w={["45px", "60px", "80px"]} src={src} />
      <Text ml="24px" fontSize={["12px", "16px", "20px"]}>
        {name}
      </Text>
    </Box>
  );
};

export default Product;
