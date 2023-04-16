// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/router";
// import React, { FormEvent, useState } from "react";

// const Twitter = () => {
//   const [twitterUsername, setTwitterUsername] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { twitterVerification } = useAuth();
//   const router = useRouter();

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     try {
//       setErrorMessage("");
//       setLoading(true);
//       twitterUsername && (await twitterVerification());
//       router.push("/profile");
//     } catch (err) {
//       setErrorMessage("Something went wrong");
//       console.log(err);
//     }
//     setLoading(false);
//   }
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter your twitter username"
//         value={twitterUsername}
//         onChange={(e) => setTwitterUsername(e.target.value)}
//         className="border"
//         required
//       />
//       {<p className="text-red-500">{errorMessage}</p>}
//       <button
//         className="bg-blue-900 p-2 text-white rounded-md"
//         disabled={loading}
//         onClick={handleSubmit}
//       >
//         {loading ? "Loading..." : "Authorize"}
//       </button>
//     </>
//   );
// };

// export default Twitter;
