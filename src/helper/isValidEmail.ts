export default function isValidEmail(email: string): boolean {
  const regex =
    /^(?!.*@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|mail\.com|protonmail\.com|gmx\.com|fastmail\.com|yandex\.com|zoho\.com|inbox\.com|tutanota\.com)$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
