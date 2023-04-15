import isAuth from "@/auth/isAuth";
import logoutTheUser from "@/auth/logout";
import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
import { UserDataContext } from "@/context/userDataContext";
import router, { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

export type AuthResponse = {
  isValidUser: boolean;
};

// export async function getStaticProps() {
// // const { jwt } = context.req.cookies;
// const response = await isAuth();
// // const isAuthorised = response.json();
// return { props: { response } };
// }

const Profile = ({ jwt, response }: { jwt: string; response: any }) => {
  return (
    <>
      <Navbar />
      <ProfileComponent />
    </>
  );
};

export default Profile;
