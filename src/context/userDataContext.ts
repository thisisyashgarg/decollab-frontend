import { createContext } from "react";

type ContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

export type UserData = {
  _id: string;
  companyName: string;
  email: string;
  password: string;
  logoUrl?: string;
  about?: string;
  followers: number;
  socialLinks?: {
    name: string;
    url: string;
  }[];
  tags?: {
    tagName: string;
    id: string;
  }[];
  flexPosts?: {
    post: string;
  }[];
  teamMembers?: {
    name: string;
    profilePic: string;
    socialLink: string;
  }[];
  brandsCollaborated?: {
    brandName: string;
    brandLogo: string;
  }[];
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
