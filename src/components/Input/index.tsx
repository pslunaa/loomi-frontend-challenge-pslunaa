import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import React, { useState, ForwardRefRenderFunction, forwardRef, SetStateAction} from "react";
import { FieldError } from "react-hook-form";
import { theme } from "../../styles/theme";
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  error?: FieldError | null;
  hidePass: Boolean;
  setHidePass: React.Dispatch<SetStateAction<boolean>>
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, hidePass, setHidePass ,label, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb="3" paddingLeft="24px" fontSize={["14px","16px","18px"]} fontWeight="normal" color={theme.colors.gray["700"]}>
        {label}
      </FormLabel>

      <InputGroup flexDirection="column">
        {name === "password" && 
          <InputRightElement as="button" mt={["0", "3px", "10px"]} onClick={() => setHidePass((prev: boolean) => !hidePass)}>
            {hidePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </InputRightElement>
        }
        <ChakraInput
          id={name}
          name={name}
          bg={theme.colors.gray["50"]}
          color="gray.700"
          w={["250px", "300px", "400px"]}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          _placeholder={{ color: "gray.500", fontSize: ["12px","16px","20px"]}}
          size="lg"
          h={["38px", "45", "60px"]}
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
