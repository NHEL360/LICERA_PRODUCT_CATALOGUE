document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const ProductCardsContainer = document.getElementById("product-cards");
        const ProductsItemsContainer = document.getElementById("cart-items");
        const Products = {}; // Object to store cart items and their quantities