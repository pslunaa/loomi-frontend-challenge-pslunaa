import { Flex, Heading } from "@chakra-ui/react"
import { SetStateAction } from "react"
import { InputSearch } from "../../../../components/InputSearch"
import { theme } from "../../../../styles/theme"

interface HeaderProps {
  setSearchText: React.Dispatch<SetStateAction<string>>
}

const HeaderList = ({setSearchText}: HeaderProps) => {
    return (
        <Flex
        w="100%"
        mt={["18px", "26px", "36px"]}
        alignItems="center"
        h={["32px", "40px", "60px"]}
        mb={["20px", "30px", "49px"]}
        justifyContent="space-between"
      >
        <Heading ml="40px" fontFamily={theme.fonts.body} fontWeight="light" fontSize={["16px", "20px", "30px"]}>Listagem de produtos</Heading>
        <InputSearch
          name="search"
          setSearchText={setSearchText}
          placeholder="Pesquisar produtos"
        />
      </Flex>
    )
}

export default HeaderList;