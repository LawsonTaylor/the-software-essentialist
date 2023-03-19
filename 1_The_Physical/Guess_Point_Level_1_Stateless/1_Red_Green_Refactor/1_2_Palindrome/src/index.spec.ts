import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("should return true for a palindrome words", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome words", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  it("should return true for a palindrome sentence", () => {
    expect(isPalindrome("Was It A Rat I Saw")).toBe(true);
    expect(isPalindrome("Never Odd or Even")).toBe(true);
  });

  it("should return true of single char strings", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should ignore leading and trailing whitespace", () => {
    expect(isPalindrome("  racecar ")).toBe(true);
  });
});
