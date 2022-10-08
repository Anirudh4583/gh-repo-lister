import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ComponentClass, useState } from "react";
import UserContext from "./user";

export default (
    Component:
      | ComponentClass
      | (({ Component, pageProps }: AppProps<{}>) => JSX.Element)
  ) =>
  (props: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState<string | null>(null);
    const [userData, setUserData] = useState(null);
    const [repoIdx, setRepoIdx] = useState(1);
    const [repoData, setRepoData] = useState(null);
    const router = useRouter();

    console.log({ username, userData, repoData });

    const fetchRepoData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=6&page=${repoIdx}`
      );
      const data = await response.json();
      setRepoData(data);
      setIsLoading(false);
    };

    const fetchUserData = async () => {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      await fetchRepoData();
      setUserData(data);
      setIsLoading(false);

      setTimeout(() => {
        router.push(`/user/${username}`);
      }, 1000);
    };

    const nextPage = async () => {
      setRepoIdx((prev) => prev + 1);
      await fetchRepoData();
    };

    const prevPage = async () => {
      setRepoIdx((prev) => prev - 1);
      await fetchRepoData();
    };

    return (
      <UserContext.Provider
        value={{
          // # States #
          username,
          userData,
          repoData,
          isLoading,
          // # Methods #
          setUsername,
          setUserData,
          fetchUserData,
        }}
      >
        <Component {...props} />
      </UserContext.Provider>
    );
  };
