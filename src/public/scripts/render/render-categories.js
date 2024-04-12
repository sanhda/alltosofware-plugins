let categoires = [
    "Annotation Tools",
    "Architectural Design",
    "Building Performance Analysis",
    "Construction",
    "Content",
    "Electrical Design",
    "Interoperability",
    "Materials",
    "Mechanical Design",
    "Plumbing Design",
    "Reality Capture",
    "Regional-Specific Functionality",
    "Scheduling & Productivity",
    "Structural Design",
    "Structural Simulation & Analysis"
]

export function renderCategories() {
    let categoriesHtml = `<h2>Categories</h2>`
    categoires.forEach((category) => {
        categoriesHtml += `<li><a href="">${category}</a></li>`
    })

    document.querySelector('.categories').innerHTML = categoriesHtml;
}