export type PostType = {
  logoUrl: string;
  _id: string;
  companyName: string;
  followers: number;
  description: string;
  views: number;
  tags: string[];
  timeFrame: string;
  companiesReachedOut: number;
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

export type UpdateProfileDetailsType = {
  companyName: "";
  logoUrl: "";
  about: "";
  socialLinks: [""];
  tags: [""];
  flexPosts: [""];
  brandsCollaborated: [""];
  teamMembers: [{ name: string; profilePic: string; socialLink: string }];
  fundings: [{ round: string; amount: number }];
};

export type Tag = {
  tagName: string;
  id: string;
};
export type Post = {
  logoUrl: string;
  companyName: string;
  followers: number;
  description: string;
  views: number;
  tags: string[];
  timeFrame: string;
  companiesReachedOut: number;
};
