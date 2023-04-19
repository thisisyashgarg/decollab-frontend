import logoutTheUser from "@/auth/logout";
import {
  UserData,
  UserDataContext,
  defaultUserData,
} from "@/context/userDataContext";
import router from "next/router";

export default function handleLogout(
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
) {
  logoutTheUser();
  setUserData(defaultUserData);
  router.push("/login");
}
