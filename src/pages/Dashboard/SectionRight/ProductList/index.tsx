import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Product from "../../../../components/Product";
import api from "../../../../services";
import { theme } from "../../../../styles/theme";
import HeaderList from "./HeaderList";
import ProductDetail from "./ProductDetail";

interface IProducts {
  createdAt: string;
  name: string;
  color: string;
  status: string;
  description: string;
  id: string;
}

const ProductList = () => {
  const [searchText, setSearchText] = useState("");
  const [productsPerText, setProductsPerText] = useState<IProducts[]>([]);
  const [productsPerPage, setProductsPerPage] = useState<IProducts[]>([]);
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    api.get(`/products?page=${page}&limit=10`).then((response) => {
      setProductsPerPage(response.data);
    });
  }, [page]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setTotalProducts(response.data.length);
    });
  }, []);

  useEffect(() => {
    if (searchText) {
      api
        .get(`/products?page=${pageSearch}&limit=10&search=${searchText}`)
        .then((response) => {
          setProductsPerText(response.data);
        });
    }
  }, [pageSearch, searchText]);

  const totalPages = Math.ceil(totalProducts / 10);

  return (
    <Grid
      w={["875px", "1175px", "1736px"]}
      mt={["25px", "30px", "40px"]}
      h="auto"
      borderRadius="20px"
      bg={theme.colors.white}
    >
      <HeaderList setSearchText={setSearchText} />
      <Flex>
        <Flex ml="40px" flexDirection="column">
          <Text
            h={["28px", "35px", "50px"]}
            fontSize={["12px", "14px", "md"]}
            color={theme.colors.white}
            bg={theme.colors.gray["500"]}
            w={["250px", "320px", "546px"]}
            borderRadius="9px"
            fontFamily={theme.fonts.body}
            fontWeight="bold"
            display="flex"
            alignItems="center"
            paddingLeft="40px"
          >
            PRODUTO
          </Text>
          <Flex
            flexDirection="column"
            w={["250px", "320px", "546px"]}
            mt="11px"
          >
            {!!searchText
              ? productsPerText.map((product) => (
                  <Product key={product.id} name={product.name} />
                ))
              : productsPerPage.map((product) => (
                  <Product key={product.id} name={product.name} />
                ))}
          </Flex>
        </Flex>
        <Flex ml="40px" flexDirection="column">
          <Box
            h={["28px", "35px", "50px"]}
            fontSize="md"
            color={theme.colors.white}
            bg={theme.colors.gray["500"]}
            w={["500px", "755px", "1070px"]}
            borderRadius="9px"
            fontFamily={theme.fonts.body}
            fontWeight="bold"
            display="flex"
            alignItems="center"
            paddingLeft="40px"
          >
            <Text
              fontSize={["12px", "14px", "md"]}
              borderRight="1px solid"
              paddingRight={["90px", "120px", "325px"]}
            >
              CORES
            </Text>
            <Text
              borderRight="1px solid"
              paddingLeft="40px"
              fontSize={["12px", "14px", "md"]}
              paddingRight={["50px", "180px", "270px"]}
            >
              ESPECIFICAÇÕES
            </Text>
            <Text fontSize={["12px", "14px", "md"]} paddingLeft="40px">
              STATUS
            </Text>
          </Box>
          <Flex
            flexDirection="column"
            w={["500px", "755px", "1070px"]}
            mt="11px"
            justifyContent="space-around"
          >
            {!!searchText
              ? productsPerText.map((product) => (
                  <ProductDetail
                    key={product.id}
                    description={product.description}
                    color={product.color}
                    status={product.status}
                  />
                ))
              : productsPerPage.map((product) => (
                  <ProductDetail
                    key={product.id}
                    description={product.description}
                    color={product.color}
                    status={product.status}
                  />
                ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        gap="8px"
        paddingRight="20px"
        h="35px"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Text>
          {!!searchText === true
            ? `${pageSearch} de ${totalPages}`
            : `${page} de ${totalPages}`}
        </Text>
        {!!searchText === true ? (
          <>
            <Center
              as="button"
              onClick={() => {
                if (pageSearch > 1) {
                  setPageSearch(page - 1);
                }
              }}
              bg={theme.colors.gray["200"]}
            >
              <IoIosArrowBack size="20" />
            </Center>
            <Center
              as="button"
              onClick={() => {
                if (pageSearch < totalPages) {
                  setPageSearch(pageSearch + 1);
                }
              }}
              bg={theme.colors.gray["200"]}
            >
              <IoIosArrowForward size="20" />
            </Center>{" "}
          </>
        ) : (
          <>
            <Center
              as="button"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
              bg={theme.colors.gray["200"]}
            >
              <IoIosArrowBack size="20" />
            </Center>
            <Center
              as="button"
              onClick={() => {
                if (page < totalPages) {
                  setPage(page + 1);
                }
              }}
              bg={theme.colors.gray["200"]}
            >
              <IoIosArrowForward size="20" />
            </Center>
          </>
        )}
      </Flex>
    </Grid>
  );
};

export default ProductList;
