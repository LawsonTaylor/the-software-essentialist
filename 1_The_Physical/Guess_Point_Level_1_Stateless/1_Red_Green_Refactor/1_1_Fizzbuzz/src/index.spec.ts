import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("should return a string", () => {
        expect(typeof fizzbuzz(5)).toBe("string");
    });

    it("should not accept input less than 1", () => {
        expect(() => fizzbuzz(0)).toThrow();
    });

    it("should not accept input greater than 100", () => {
        expect(() => fizzbuzz(101)).toThrow();
    });

    it("should return 'Fizz' for multiples of 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
        expect(fizzbuzz(6)).toBe("Fizz");
        expect(fizzbuzz(9)).toBe("Fizz");
    });

    it("should return 'Buzz' for multiples of 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
        expect(fizzbuzz(10)).toBe("Buzz");
        expect(fizzbuzz(20)).toBe("Buzz");
    })

    it("should return 'FizzBuzz' for multiples of 3 and 5", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
        expect(fizzbuzz(30)).toBe("FizzBuzz");
        expect(fizzbuzz(45)).toBe("FizzBuzz");
    });

    it("should return the number as a string for inputs that are not a multiple of 3 or 5", () => {
        expect(fizzbuzz(1)).toBe("1");
        expect(fizzbuzz(2)).toBe("2");
        expect(fizzbuzz(4)).toBe("4");
    });

});
