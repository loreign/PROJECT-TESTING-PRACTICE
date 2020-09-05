const capitalize = (string) => {
  if (typeof string === "string") {
    return string[0].toUpperCase() + string.slice(1);
  } else {
    throw new Error("argument is not a string");
  }
};

const reverseStr = (str) => {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
  } else {
    throw new Error("argument is not a string");
  }
};

const calculator = (() => {
  const add = (x, y) => x + y;
  const sub = (x, y) => x - y;
  const mult = (x, y) => x * y;
  const div = (x, y) => x / y;
  return { add, sub, mult, div };
})();

const caesarCipher = (str, offset) => {
  const trueOffset = offset % 26;

  const shift = (char) => {
    if (char >= 65 && char <= 90) {
      char += trueOffset;
      if (char > 90) {
        char = char - 90 + 64;
      } else if (char < 65) {
        char = 91 - (65 - char);
      }
    } else if (char >= 97 && char <= 122) {
      char += trueOffset;
      if (char > 122) {
        char = char - 122 + 96;
      } else if (char < 97) {
        char = 123 - (97 - char);
      }
    }
    return char;
  };
  return str
    .split("")
    .map((char) => char.charCodeAt(0))
    .map((char) => shift(char))
    .map((char) => String.fromCharCode(char))
    .join("");
};

const arrayAnalysis = (arr) => {
  let average = arr.reduce((a, b) => a + b, 0) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  return { average, min, max, length };
};

export { capitalize, reverseStr, calculator, caesarCipher, arrayAnalysis };
