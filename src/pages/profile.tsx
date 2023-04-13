import isAuth from "@/auth/isAuth";
import logoutTheUser from "@/auth/logout";
import ProfileComponent from "@/components/ProfileComponent";
import router, { useRouter } from "next/router";
import React, { useEffect } from "react";

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
  const router = useRouter();
  // console.log(response);

  // useEffect(() => {
  //   if (!jwt) {
  //     logoutTheUser();
  //     router.push("/login");
  //   } else {
  //   }
  // }, []);

  return <ProfileComponent />;
};

export default Profile;
