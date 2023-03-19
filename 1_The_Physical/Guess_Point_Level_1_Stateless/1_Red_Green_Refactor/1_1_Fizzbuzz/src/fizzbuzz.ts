
export function fizzbuzz(num: number): string {
    if(num < 1 || num > 100) {
        throw new Error("Input number is outside the accepted range 1-100");
    }
    
    const fizz = num % 3 === 0;
    const buzz = num % 5 === 0;

    if(fizz && buzz) {
        return "FizzBuzz";
    }
    if(fizz) {
        return "Fizz";
    }
    if(buzz) {
        return "Buzz";
    }
    return String(num);
}

