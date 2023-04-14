import { createContext } from "react";

type ContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

export type UserData = {
  _id: string;
  companyName: string;
  email: string;
  twitterUsername: string;
  password: string;
  logoUrl?: string;
  about?: string;
  followers: number;
  socialLinks?: string[];
  tags?: string[];
  flexPosts?: string[];
  teamMembers?: {
    name: string;
    profilePic: string;
    socialLink: string;
  }[];
  brandsCollaborated?: string[];
  posts?: {
    description: string;
    views: number;
    tags: string[];
    timeFrame: string;
    companiesReachedOut: number;
  }[];
  fundings?: {
    round: string;
    amount: number;
  }[];
};

export const defaultUserData = {
  _id: "",
  companyName: "",
  email: "",
  twitterUsername: "",
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
