import { findProductById } from "/scripts/util/util.js"
import { renderProductDetail } from "./render/render-product-detail.js";

let product = findProductById(id);

if (product) {
    renderProductDetail(product);
}

