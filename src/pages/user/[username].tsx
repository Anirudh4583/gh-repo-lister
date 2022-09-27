import React from "react";
import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdLink, MdLocationOn } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

function Details() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <Box px="5vw" py="2vh" border="1px solid blue">
      <Flex border="1px solid red">
        <Image
          src={"https://avatars.githubusercontent.com/u/34450549?v=4"}
          alt="avatar image"
          height={150}
          width={150}
          style={{ borderRadius: "50%" }}
        />

        <Stack pl="10">
          <Text fontSize="3xl">John Doe</Text>
          <Text fontSize="md">Bio goes here</Text>
          <Flex align="center">
            <Icon as={MdLocationOn} boxSize={6} />
            <Text fontSize="md" pl="1">
              Orlando
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaTwitter} boxSize={5} />
            <Link href="https://twitter.com/JohnDoe" isExternal pl={2}>
              https://twitter.com/JohnDoe
            </Link>
          </Flex>
        </Stack>
      </Flex>

      <Flex align="center" my={6}>
        <Icon as={MdLink} boxSize={5} />
        <Link href={"https://github.com/JohnDoe"} isExternal pl={2}>
          https://github.com/JohnDoe
        </Link>
      </Flex>

      <Box border="1px solid purple"></Box>
    </Box>
  );
}

export default Details;
