export default function generateRandomHexCode() {
  const hexCodes = [];
  for (let i = 0; i < 100; i++) {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    hexCodes.push("#" + hex);
  }

  return hexCodes;
}
