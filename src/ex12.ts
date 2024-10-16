// Create a function `renameKeys` that accepts an object and a mapping of key renames.
// The function should return a new object where the keys are renamed according to the map.
// Return type: a new object with renamed keys.

function renameKeys<T extends Record<string, any>, K extends Record<string, string>>(obj: T, keyMap: K): Omit<T, keyof K> & { [key: string]: any } {
    const newObj: Record<string, any> = {};

    for (const key in obj) {
        // Usa el nuevo nombre de la clave si está en el keyMap, si no, conserva la clave original
        const newKey = keyMap[key] || key;
        newObj[newKey] = obj[key];
    }

    return newObj as Omit<T, keyof K> & { [key: string]: any };
}
// Expected output:
console.log(renameKeys({ name: "Alice", age: 30 }, { name: "fullName" }))
// { fullName: "Alice", age: 30 }