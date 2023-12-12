import { signupTheUser } from "@/lib/auth/signup";
import isStrongPassword from "@/helper/isStrongPassword";
import isValidEmail from "@/helper/isValidEmail";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, FormEvent } from "react";
import TagInput from "../inputBoxes/TagInputBox";
import { Tag } from "@/types/types";

const SignupComponent = () => {
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
        {/* <div className="flex items-center gap-4">
          <label htmlFor="email">Add relevant tags:</label>
          <TagInput tags={tags} setTags={setTags} />
        </div> */}

        <div className="space-x-4">
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

        <div className="space-x-4">
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
          <p className="text-xs text-gray-400">
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

        <p>
        Already a user?{" "}
        <Link type="button" href={"/login"} className="text-blue-700">
          Login
        </Link>{" "}
      </p>
      </form>
      </div>
    </>
  );
};

export default SignupComponent;
