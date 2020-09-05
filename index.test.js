//1. capitalize(string) takes a string and returns that string with the first character capitalized.

import * as index from "./index.js";

test("1. Returns String", () => {
  expect(typeof index.capitalize("string")).toBe("string");
});

test("1. Capatilze first letter", () => {
  expect(index.capitalize("string")).toMatch("String");
});

test("1. Error due to arguemnt not a string", () => {
  expect(() => index.capitalize(69)).toThrow();
  expect(() => index.capitalize(true)).toThrow();
});

//2. reverseString(string) takes a string and returns it reversed.

test("2. Returns String", () => {
  expect(typeof index.reverseStr("string")).toBe("string");
});

test("2. Reverse String", () => {
  expect(index.reverseStr("string")).toBe("gnirts");
  expect(index.reverseStr("Reverse String's")).toBe("s'gnirtS esreveR");
});

test("2. Error due to arguemnt not a string", () => {
  expect(() => index.reverseStr(69)).toThrow();
  expect(() => index.reverseStr(true)).toThrow();
});

//3. A calculator object that contains the basic operations: add, subtract, divide, and multiply.

test("3. Adds two numbers", () => {
  expect(index.calculator.add(4, 7)).toBe(11);
});

test("3. Subtracts one number from another", () => {
  expect(index.calculator.sub(11, 7)).toBe(4);
});

test("3. Multiplys two numbers togther", () => {
  expect(index.calculator.mult(4, 7)).toBe(28);
});

test("3. Divides one number from another", () => {
  expect(index.calculator.div(70, 7)).toBe(10);
});

//4. Caesar Cipher. Read about it on this website
//Don’t forget to test wrapping from z to a.
//Don’t forget to test keeping the same case.
//Don’t forget to test punctuation!
//For this one, you may want to split the final function into a few smaller functions.
//One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones.
//So in this case you only need tests for the final caesar() function.
//If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

test("4. Caesars Cipher: Normal ", () => {
  expect(index.caesarCipher("does this work", 17)).toBe("ufvj kyzj nfib");
});

test("4. Caesars Cipher: Caps ", () => {
  expect(index.caesarCipher("Does This WORK", 17)).toBe("Ufvj Kyzj NFIB");
});

test("4. Caesars Cipher: > 26 ", () => {
  expect(index.caesarCipher("does this work", 43)).toBe("ufvj kyzj nfib");
});

test("4. Caesars Cipher: < 0 ", () => {
  expect(index.caesarCipher("does this work", -9)).toBe("ufvj kyzj nfib");
});

test("4. Caesars Cipher: Ignore Punctuation ", () => {
  expect(index.caesarCipher("does this work?", 17)).toBe("ufvj kyzj nfib?");
});

//5. Array Analysis.
// Write a function that takes an array of numbers and returns an object with the following properties:
// average, min, max, and length.

test("5. Returns Object ", () => {
  expect(typeof index.arrayAnalysis([1, 8, 3, 4, 2, 6])).toBe("object");
});

test("5. Returns Object w/ Correct Stats", () => {
  expect(index.arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("5. Returns Object to Contain Correct Keys", () => {
  expect(Object.keys(index.arrayAnalysis([1, 8, 3, 4, 2, 6]))).toContain(
    "average",
    "min",
    "max",
    "length"
  );
});
