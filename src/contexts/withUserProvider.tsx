import { ComponentClass, useState } from "react";
import UserContext from "./user";

export default (Component: ComponentClass | (() => JSX.Element)) =>
  (props: any) => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState("");

    return (
      <UserContext.Provider
        value={{
          // # States #
          username,
          userData,
          // # Methods #
          setUsername,
        }}
      >
        <Component {...props} />
      </UserContext.Provider>
    );
  };
