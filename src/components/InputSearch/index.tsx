import {
    Input as ChakraInput,
    InputProps as ChakraInputProps,
    InputRightElement,
    InputGroup,
  } from "@chakra-ui/react";
  
  import React, {ForwardRefRenderFunction, forwardRef, SetStateAction} from "react";
  import { theme } from "../../styles/theme";
  import {AiOutlineSearch} from "react-icons/ai"
  
  interface InputProps extends ChakraInputProps {
    name: string;
    setSearchText: React.Dispatch<SetStateAction<string>>
  }
  
  const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    {name, setSearchText, ...rest },
    ref
  ) => {
    
  
    return (
        <InputGroup mr="40px" display="flex" alignItems="center" justifyContent="center" w={["230px", "300px", "388px"]}>
            <InputRightElement h="100%">
              <AiOutlineSearch />
            </InputRightElement>
          <ChakraInput
            id={name}
            name={name}
            bg={theme.colors.gray["50"]}
            color="gray.700"
            onChangeCapture={(e) => setSearchText(e.currentTarget.value)}
            _placeholder={{ color: "gray.500", fontSize: ["12px","16px","20px"]}}
            size="lg"
            h={["32px", "40px", "60px"]}
            ref={ref}
            {...rest}
          />
        </InputGroup>

    );
  };
  
  export const InputSearch = forwardRef(InputBase);