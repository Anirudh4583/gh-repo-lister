import { useContext } from "react";
import UserContext from "./context";

export default UserContext;

export function useUser() {
  return useContext(UserContext);
}
