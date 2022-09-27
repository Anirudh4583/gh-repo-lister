import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function UserNotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        User Does Not Exist
      </Text>
      <Text color={"gray.500"} mb={6}>
        The user you're looking for either does not exist or the page is
        expired. Please try again.
      </Text>

      <Link href="/">
        {/* <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button> */}

        <Button
          fontFamily={"heading"}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
        >
          Try Again
        </Button>
      </Link>
    </Box>
  );
}
