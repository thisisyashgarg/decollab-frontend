import { loginTheUser } from "@/auth/login";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
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
    const { email, password } = formData;
    try {
      setLoading(true);
      setErrorMessage("");
      const userObject = await loginTheUser(email, password);
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
    </form>
  );
};

export default Signup;
