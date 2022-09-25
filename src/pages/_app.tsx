import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import { Hero } from "components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <Component {...pageProps} />
      <DarkModeSwitch />
    </ChakraProvider>
  );
}

export default MyApp;
