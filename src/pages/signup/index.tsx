import { signupTheUser } from "@/auth/signup";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    twitterUsername: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password, twitterUsername, companyName } = formData;
    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }
    try {
      setLoading(true);
      setErrorMessage("");
      const userObject = await signupTheUser(
        email,
        password,
        twitterUsername,
        companyName
      );
      if (userObject._id) {
        console.log(userObject);
        router.push("/profile");
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
        <label htmlFor="Company Name">Company Name:</label>
        <input
          className="border"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          required
        />
      </div>
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
        <label htmlFor="email">Twitter Username:</label>
        <input
          className="border"
          type="text"
          name="twitterUsername"
          value={formData.twitterUsername}
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
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          className="border"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
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
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
};

export default Signup;
