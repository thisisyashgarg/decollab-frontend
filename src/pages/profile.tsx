import getUserFromJWT from "@/auth/getUserIdFromJWT";
import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
import { UserDataContext } from "@/context/userDataContext";
import React, { useContext, useEffect, useState } from "react";

export type AuthResponse = {
  isValidUser: boolean;
};

export const Profile = () => {
  return (
    <>
      <Navbar />
      <ProfileComponent />
    </>
  );
};

export default Profile;
