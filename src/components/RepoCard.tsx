import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

type ComponentProps = {
  title?: string;
  url?: string;
  about: string;
  topics: string[];
};

function RepoCard({ title, url, about, topics }: ComponentProps) {
  return (
    <Box
      px={2}
      pb={2}
      minHeight="120px"
      h="100%"
      border="1px solid #e8e8e8"
      borderRadius={8}
      display="flex"
      flexDirection={"column"}
      justifyContent="space-between"
      _hover={{ boxShadow: "0 0 10px #e8e8e8", transition: "all 0.3s ease" }}
    >
      <Link href={url} isExternal>
        <Text fontSize="2xl" fontWeight={"semibold"} color={"#428bca"}>
          {title}
        </Text>
      </Link>
      <Text fontSize="md" color={"#6a737d"}>
        {about}
      </Text>

      <Flex wrap="wrap">
        {topics?.map((topic) => (
          <Button
            variant="solid"
            bg="#428bca"
            color="white"
            size="sm"
            mt={2}
            mr={2}
          >
            {topic}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

export default RepoCard;

RepoCard.defaultProps = {
  title: "Heroes",
  url: "https://github.com/anirudh4583",
  about: "A simple CRUD app using React, TypeScript, and Chakra UI",
  topics: ["React", "TypeScript", "Chakra UI"],
};
