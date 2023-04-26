import { signupTheUser } from "@/auth/signup";
import TagInput from "@/components/inputBoxes/TagInputBox";
import isStrongPassword from "@/helper/isStrongPassword";
import isValidEmail from "@/helper/isValidEmail";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";

// profile image upload feature

// multiple tags on signup

// streamchat, cometchat ( notifications )

type Tag = {
  tagName: string;
  id: string;
};

const Signup = () => {
  const [tags, setTags] = useState<Tag[]>([{ tagName: "web3", id: nanoid() }]);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    tags: tags,
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  console.log(formData);
  console.log(tags);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, tags: tags };
    });
  }, [tags]);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password, tags, companyName } = formData;
    if (formData.password !== formData.confirmPassword)
      return setErrorMessage("Passwords do not match");
    if (!isValidEmail(email))
      return setErrorMessage("Please enter a valid company email");
    if (!isStrongPassword(password))
      return setErrorMessage("Please enter a strong password");
    try {
      setLoading(true);
      setErrorMessage("");
      const userObject = await signupTheUser(
        email,
        password,
        tags,
        companyName
      );
      if (userObject._id) {
        console.log(userObject);
        router.push("/collabhub");
        // router.push("/signup/twitter");
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
        <div className="flex items-center">
          <label htmlFor="email">Add relevant tags:</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="border"
            type="password"
            name="password"
            minLength={8}
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
            minLength={8}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errorMessage && <h2 className="text-red-900">{errorMessage}</h2>}
          <p className="text-xs">
            Password should contain at least one uppercase, one lowercase
            letter, one digit, and one special character.
          </p>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-blue-900 p-2 text-white rounded-md"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <p>
        Already a user?{" "}
        <Link href={"/login"} className="text-blue-700">
          Login
        </Link>{" "}
      </p>
    </>
  );
};

export default Signup;
