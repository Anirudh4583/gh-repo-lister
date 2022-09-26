import { useRouter } from "next/router";
import React from "react";

type Props = {};

function Details({}: Props) {
  const router = useRouter();
  const { username } = router.query;

  return <div>{username}</div>;
}

export default Details;
