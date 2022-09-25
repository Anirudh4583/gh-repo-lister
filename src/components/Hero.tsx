import { Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export const Hero = ({ title }: { title: string }) => (
  <ChakraLink
    as={Link}
    href="/"
    _hover={{
      textDecoration: "none",
    }}
  >
    <Flex
      justifyContent="center"
      // alignItems="center"
      mt="2"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Heading cursor="pointer" fontSize="2.8rem">
        {title}
      </Heading>
    </Flex>
  </ChakraLink>
);

Hero.defaultProps = {
  title: "Github Repo Lister",
};
