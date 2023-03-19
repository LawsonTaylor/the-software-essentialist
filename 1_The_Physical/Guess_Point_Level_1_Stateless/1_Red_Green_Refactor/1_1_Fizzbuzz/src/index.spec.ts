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

});
