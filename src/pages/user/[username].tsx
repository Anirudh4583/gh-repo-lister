import React, { useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdLink, MdLocationOn } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import RepoCard from "components/RepoCard";
import { useUser } from "contexts/user";
import UserData from "components/UserData";
import Link from "next/link";
import UserNotFound from "components/UserNotFound";

function Details() {
  const { userData, repoData, isLoading } = useUser();
  const [error, setError] = useState(false);

  //TODO: check for data if it is null then redirect to home page
  useEffect(() => {
    if (!userData || !repoData) {
      setError(true);
    }
  }, []);

  return (
    <>
      {error && <UserNotFound />}
      {!error && userData && repoData && (
        <UserData
          userData={userData}
          repoData={repoData}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default Details;
