// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues(values: number[]): number;
function addValues(values: string[]): string;
function addValues(values: number[] | string[]): number | string {

    if (typeof values[0] === 'number') {
        return (values as number[]).reduce((sum, value) => sum + value, 0);
    } else {
        return (values as string[]).join("");
    }
}

// Expected output:
console.log(addValues([1, 2, 3])) // 6
console.log(addValues(["Hello", " ", "World"])) // "Hello World"