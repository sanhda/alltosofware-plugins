import { renderCategories } from "./render/render-categories.js";
import { renderProducts } from "./render/render-products.js";


function renderAllContents() {
    renderCategories();
    renderProducts();
}

renderAllContents();