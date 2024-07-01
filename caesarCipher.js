export default function caesarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const isLetterRegex = /^[A-Za-z]$/;

    if (isLetterRegex.test(char)) {
      let shiftIndex = alphabet.indexOf(char.toLowerCase()) + shift;
      shiftIndex %= 26;
      const newChar = alphabet[shiftIndex];
      result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
    } else {
      result += char;
    }
  }

  return result;
}
