import { loginTheUser } from "@/lib/auth/login";
import { UserDataContext } from "@/context/userDataContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext, FormEvent } from "react";
import NavbarComponent from "../NavbarComponent";

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUserData, userData} = useContext(UserDataContext);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(userData, "userData")

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = formData;
    try {
      setLoading(true);
      setErrorMessage("");
      const userObject = await loginTheUser(email, password);

      console.log(userObject, "userObject")
      if (userObject) {
        setUserData(userObject?.user);
        localStorage.setItem("jwt", userObject?.token);
        router.push("/collabhub");
      } else {
        setErrorMessage(userObject[0]);
      }
    } catch (err) {
      setErrorMessage("Failed to create an account");
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>

    <div className="h-screen flex justify-center items-center ">
 <form className="space-y-4 bg-gray-100 rounded-lg p-6" onSubmit={handleSubmit}>
      <div className="space-x-4">
        <label htmlFor="email">Company Email:</label>
        <input
          className="border"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-x-4">
        <label htmlFor="password">Password:</label>
        <input
          className="border"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {errorMessage && <div className="text-red-900">{errorMessage}</div>}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-blue-900 p-2 text-white rounded-md"
      >
        {loading ? "Loading..." : "Login"}
      </button>
      <p>
        New User?{" "}
        <Link href={"/signup"} className="text-blue-700">
          Signup
        </Link>{" "}
      </p>
    </form>

    </div>
    </>
  
   
  );
};
export default LoginComponent;
