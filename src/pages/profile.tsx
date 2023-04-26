import getUserFromJWT from "@/auth/getUserIdFromJWT";
import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
import { UserDataContext } from "@/context/userDataContext";
import React, { useContext, useEffect } from "react";

export type AuthResponse = {
  isValidUser: boolean;
};

export const Profile = () => {
  const { setUserData } = useContext(UserDataContext);

  return (
    <>
      <Navbar />
      <ProfileComponent />
    </>
  );
};

export default Profile;
