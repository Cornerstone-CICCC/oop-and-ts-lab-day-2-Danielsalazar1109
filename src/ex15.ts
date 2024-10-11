// Create an interface `Product` with properties `name` and `category`.
// Write a function `groupByCategory` that takes an array of products and groups them by category into an object where the keys are category names and the values are arrays of products in that category.
// Return type: object with category names as keys and arrays of products as values.

interface Product {
  name: string;
  category: string;
}

function groupByCategory(products: Product[]): Record<string, Product[]> {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []; 
    }
    acc[product.category].push(product); 
    return acc; 
  }, {} as Record<string, Product[]>); 
}

// Expected output:
const groupedProducts = groupByCategory([
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Orange", category: "Fruit" }
]);
console.log(groupedProducts);
// { Fruit: [{ name: "Apple", category: "Fruit" }, { name: "Orange", category: "Fruit" }], Vegetable: [{ name: "Carrot", category: "Vegetable" }] }