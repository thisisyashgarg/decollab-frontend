import logoutTheUser from "@/auth/logout";
import { UserDataContext, defaultUserData } from "@/context/userDataContext";
import router from "next/router";
import { useContext } from "react";

export default function handleLogout() {
  const { setUserData } = useContext(UserDataContext);
  logoutTheUser();
  setUserData(defaultUserData);
  router.push("/login");
}
