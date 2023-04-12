import ProfileComponent from "@/components/ProfileComponent";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

const Profile = () => {
  console.log(Cookies.get("jwt"));
  return <ProfileComponent />;
};

export default Profile;
