import { useRouter } from "next/router";
import { ComponentClass, useState } from "react";
import UserContext from "./user";

export default (Component: ComponentClass | (() => JSX.Element)) =>
  (props: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState<string | null>(null);
    const [userData, setUserData] = useState(null);
    const [repoIdx, setRepoIdx] = useState(3);
    const [repoData, setRepoData] = useState(null);
    const router = useRouter();

    console.log({ username, userData, repoData });

    const fetchRepoData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=9&page=${repoIdx}`
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

    return (
      <UserContext.Provider
        value={{
          // # States #
          username,
          userData,
          isLoading,
          // # Methods #
          setUsername,
          fetchUserData,
        }}
      >
        <Component {...props} />
      </UserContext.Provider>
    );
  };
