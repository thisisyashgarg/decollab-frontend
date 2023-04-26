export default function isStrongPassword(password: string) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  return passwordRegex.test(password);
}
