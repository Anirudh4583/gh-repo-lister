import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdLink, MdLocationOn } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import RepoCard from "components/RepoCard";

function UserData({ userData, repoData }) {
  const { avatar_url, bio, html_url, name, location, twitter_username } =
    userData;

  return (
    <Box px="5vw" py="2vh" mb="2vh">
      <Flex>
        <Image
          src={avatar_url}
          alt="avatar image"
          height={150}
          width={150}
          style={{ borderRadius: "50%" }}
        />

        <Stack pl="10">
          <Text fontSize="3xl">{name}</Text>
          <Text fontSize="md">{bio}</Text>
          {location && (
            <Flex align="center">
              <Icon as={MdLocationOn} boxSize={6} />
              <Text fontSize="md" pl="1">
                {location}
              </Text>
            </Flex>
          )}
          {twitter_username && (
            <Flex align="center">
              <Icon as={FaTwitter} boxSize={5} />
              <Link
                href={`https://twitter.com/${twitter_username}`}
                isExternal
                pl={2}
              >
                https://twitter.com/{twitter_username}
              </Link>
            </Flex>
          )}
        </Stack>
      </Flex>

      <Flex align="center" my={6}>
        <Icon as={MdLink} boxSize={5} />
        <Link href={html_url} isExternal pl={2}>
          {html_url}
        </Link>
      </Flex>

      <Box>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(1, 1fr)"
          gap={2}
        >
          {repoData?.map((repo) => (
            <GridItem key={repo.id} rowSpan={1} colSpan={1}>
              <RepoCard
                title={repo.name}
                url={repo.html_url}
                about={repo.description}
                topics={repo.topics}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default UserData;
