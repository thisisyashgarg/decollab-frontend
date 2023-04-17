import { loginTheUser } from "@/auth/login";
import { UserDataContext } from "@/context/userDataContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useContext, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUserData } = useContext(UserDataContext);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = formData;
    try {
      setLoading(true);
      setErrorMessage("");
      const userObject = await loginTheUser(email, password);
      if (userObject._id) {
        setUserData(userObject);
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
    <form onSubmit={handleSubmit}>
      <div>
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

      <div>
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
  );
};

export default Signup;
