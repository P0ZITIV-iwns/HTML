function camelize(str) {
  return str.length === 0 ? str : str.split("-").map((word, index) => index === 0 ? word : `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`).join("");
}