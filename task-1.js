// Task 1. Packing goods
function isEnoughCapacity(products, containerSize) {
    const productBox = { apples: 2, grapes: 4 }; // Define the weights of the products
    let totalSize = 0; // Initialize total size to 0
    
    // Iterate over the products object
    for (const [product, quantity] of Object.entries(products)) {
        if (productBox[product]) { // Check if the product exists in productBox
            totalSize += productBox[product] * quantity; // Calculate total size
        }
    }
    
    return totalSize <= containerSize; // Check if total size is within container size
}

// Test cases
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
