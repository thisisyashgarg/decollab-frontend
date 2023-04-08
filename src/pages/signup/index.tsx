import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { FormEvent, MouseEvent, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }
    try {
      setLoading(true);
      setErrorMessage("");
      await signUp(formData.email, formData.password);
      router.push("/signup/twitter");
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
          id="email"
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
          id="password"
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
          id="confirmPassword"
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
