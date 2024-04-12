import { products } from "/data/products.js"

export function findProductById(id) {
    for (let product of products) {
        if (product.id === id) {
            return product;
        }
    }

    return null;
}