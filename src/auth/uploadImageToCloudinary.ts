export default async function uploadImageToCloudinary(
  base64EncodedImage: string | ArrayBuffer,
  userId: string
) {
  console.log("upload called");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}api/cloudinary/upload`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: base64EncodedImage, userId: userId }),
    }
  );
  const data = await response.json();
  return data;
}
