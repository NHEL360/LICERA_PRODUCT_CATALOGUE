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

    <img src="${Product.Product_Image}" class="card-img-top" alt="${Product.Product_Name}">
    <div class="card-body">
      <h5 class="card-title">${Product.Product_Name}</h5>
      <p class="card-text">${Product.Product_Description}</p>
      <p class="card-text">Price: $${Product.Product_Price.toFixed(2)}</p>
      <p class="card-text"><small class="text-body-secondary">Date Added: ${Product.Product_DateAdded}</small></p>
      <p class="card-text"><small class="text-body-secondary">Expiration Date: ${Product.Product_ExpirationDate}</small></p>
      <button class="btn btn-primary add-to-cart" data-product="${Product.Product_Name}">Add to Cart</button>
    </div>
  `;
    ProductCardsContainer.appendChild(card);
  });
  // Event listener for Add to Cart buttons
  ProductCardsContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
        const ProductName = event.target.getAttribute("data-product");
        if (Products[ProductName]) {
            Products[ProductName]++;
        } else {
            Products[ProductName] = 1;
        }
        updateProductsDisplay();
      }
    });
    // Function to update the Products display
    function updateProductsDisplay() {
        ProductsItemsContainer.innerHTML = "";

      Object.keys(Products).forEach(ProductName => {
        const quantity = Products[ProductName];
        const li = document.createElement("li");
        li.textContent = `${ProductName}: ${quantity}`;
        ProductsItemsContainer.appendChild(li);
    });
    // Update the count element to display the number of unique items in the Products
    document.getElementById('count').style.display = 'flex'; // Assuming you're using flexbox
    document.getElementById('count').innerText = Object.keys(Products).length;
  }
})
.catch(error => {
    console.error("Error fetching products:", error);
  });
  const ProductsLink = document.querySelector('.cart');
  const ProductsItems = document.getElementById('cart-items');

  // Prevent default behavior on click
ProductsLink.addEventListener('click', function(event) {
event.preventDefault();

// Toggle display of ProductsItems
if (ProductsItems.style.display === 'none') {
   ProductsItems.style.display = 'flex';
} else {
   ProductsItems.style.display = 'none';
}
});
});