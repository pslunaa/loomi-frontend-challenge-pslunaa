import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    purple: {
      "100": "#F78899",
      "200": "#EC657A",
      "400": "#E0347D",
      "500": "#D6628E",
    },
    gray: {
      "50": "#F3F5F6",
      "100": "#F6F6F9",
      "500": "#4E5D66",
      "700": "#333333",
      "800": "#1E252B",
    },
    blue: {
      "50": "#9FD8D5",
      "700": "#393C56",
      "800": "#252E48",
    },
    green: {
      "400": "#7BB686",
      "600": "#109E8E",
    },
    brown: {
      "100": "#F7C982",
      "400": "#4D4141",
    },
    violet: {
      "700": "#5A4CA7",
    },
  },
  fonts: {
    body: "Ubuntu",
    heading: "Ubuntu",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  breakpoints: {
    sm: "1000px",
    md: "1280px",
    lg: "1920px",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.700",
      },
    },
  },
});
