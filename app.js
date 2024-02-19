document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const ProductCardsContainer = document.getElementById("product-cards");
        const ProductsItemsContainer = document.getElementById("cart-items");
        const Products = {}; // Object to store cart items and their quantities

ProductCardsContainer.classList.add("card-group"); // Adding card-group class to ProductCardsContainer

data.products.forEach(Product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `