import Navbar from "@/components/NavbarComponent";
import ProfileComponent from "@/components/profilePage/ProfileComponent";
import React from "react";

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
