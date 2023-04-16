import getUserFromJWT from "@/auth/getUserIdFromJWT";
import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
import { UserDataContext } from "@/context/userDataContext";
import React, { useContext, useEffect, useState } from "react";

export type AuthResponse = {
  isValidUser: boolean;
};

export const Profile = () => {
  const { setUserData } = useContext(UserDataContext);
  async function getUser() {
    const user = await getUserFromJWT();
    setUserData(user[0]);
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Navbar />
      <ProfileComponent />
    </>
  );
};

export default Profile;
