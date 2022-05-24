import { Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import home from "../../assets/home.svg";
import cat from "../../assets/cat.svg";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  return <Text>Menu</Text>;
};
