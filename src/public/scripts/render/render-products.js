import { products } from "/data/products.js"

export function renderProducts() {
    
    let productsHtml = ``
    products.forEach((product) => {
        productsHtml += `<div class="product">
        <a href="/detail?id=${product.id}">
            <div class="product-header">
            <img src="../../data/products/${product.folder}/images/${product.logo}" alt="">
            <h3>${product.name}</h3>
        </div>

        <div class="product-descreption">
            ${product.description}
        </div>

        <div class="product-rating">
            <img class="rating-icon" src="./img/ratings/rating-${product.rating.stars * 10}.png" alt="">
            <p class="rating-number">${product.rating.count}</p>
        </div>

        <p class="product-price">Trial</p>
        </a>
        
    </div>`
    })

    document.querySelector('.products').innerHTML = productsHtml;
}
