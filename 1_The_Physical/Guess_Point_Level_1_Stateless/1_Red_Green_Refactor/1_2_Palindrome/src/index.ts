
export function isPalindrome (input: string) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    const reversed = input.split("").reverse().filter(char => char !== " ").join("").toLowerCase();
    const inputWithoutSpaces = input.split("").filter(char => char !== " ").join("").toLowerCase();
    return reversed === inputWithoutSpaces;
}

