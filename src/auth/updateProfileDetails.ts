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

export async function saveProfileDetails(updatedDeatils: any, userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}profile/update`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify([updatedDeatils, { id: userId }]),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}
