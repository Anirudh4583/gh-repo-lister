import React from "react";
import { Button, Flex, IconButton, Stack } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useUser } from "contexts/user";

function PageBar() {
  const { pageIdx, nextPage, prevPage, setPage, userData } = useUser();

  const maxPages = Math.ceil(userData?.public_repos / 6);
  return (
    <Stack align={"center"} mt={10}>
      {userData && (
        <>
          <Flex justifyContent="center" mt={2}>
            <IconButton
              colorScheme="blue"
              variant="outline"
              size="sm"
              aria-label="First Page"
              disabled={pageIdx === 1}
              icon={<ArrowLeftIcon />}
              onClick={() => setPage(1)}
            />
            {Array.from(Array(maxPages).keys()).map((p) => (
              <Button
                key={p}
                variant="outline"
                colorScheme="blue"
                size="sm"
                aria-label={`Page ${p + 1}`}
                disabled={p + 1 === pageIdx}
                onClick={() => setPage(p + 1)}
              >
                {p + 1}
              </Button>
            ))}
            <IconButton
              colorScheme="blue"
              variant="outline"
              size="sm"
              aria-label="Last Page"
              disabled={pageIdx === maxPages}
              icon={<ArrowRightIcon />}
              onClick={() => setPage(maxPages)}
            />
          </Flex>

          <Flex
            w={maxPages < 10 ? maxPages * 10 : 100 + "%"}
            minW="20%"
            justifyContent="space-evenly"
            mt={2}
          >
            <Button
              variant="outline"
              colorScheme="blue"
              size="sm"
              disabled={pageIdx === 1}
              onClick={prevPage}
            >
              Older
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              size="sm"
              disabled={pageIdx === maxPages}
              onClick={nextPage}
            >
              Newer
            </Button>
          </Flex>
        </>
      )}
    </Stack>
  );
}

export default PageBar;
