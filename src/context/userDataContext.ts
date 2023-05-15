import { UserData } from "@/types/types";
import { createContext } from "react";

type ContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

export const defaultUserData = {
  _id: "",
  companyName: "",
  email: "",
  password: "",
  logoUrl: "",
  about: "",
  followers: 0,
  socialLinks: [],
  tags: [],
  flexPosts: [],
  teamMembers: [],
  brandsCollaborated: [],
  posts: [],
  fundings: [],
};

export const UserDataContext = createContext<ContextType>({
  userData: defaultUserData,
  setUserData: () => {},
});
