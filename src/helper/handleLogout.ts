import logoutTheUser from "@/lib/auth/logout";
import {
  defaultUserData,
} from "@/context/userDataContext";
import router from "next/router";
import { UserData } from "@/types/types";

export default function handleLogout(
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
) {
  logoutTheUser();
  setUserData(defaultUserData);
  router.push("/login");
}
