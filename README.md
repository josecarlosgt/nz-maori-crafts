# Workshop #3: Handling Events
In this workshop, you will review how to handle user events in the application of a web application.

Download the workshop materials from [here](https://github.com/josecarlosgt/nz-maori-crafts/raw/workshop-3-handling-events/nz-handicraft-workshop-3.zip).

## Task 1: Add add to cart functionality

Use an array to represent the products added to the cart. Each item in this array is a number representing the product's id in the PRODUCTS object:

```javascript
const CART = [];
```

Create an event handler that add products to the cart:

```javascript
// Adds a product to the cart
function addProduct() {
    // Use data property added in the showProducts function to identify the product
    const productId = $(this).data("product-id");

    CART.push(productId); 
}
```

Customize the product HTML in `showProducts()` to register the event handler on the "Add to cart" button:

```javascript
...

productHTML.find(".product-action").
    text("Add to cart").
    on("click", addProduct).
    // Add this data property to identify the product when it is added to the cart
    data("product-id", product.id);

...
```

Create a function that displays the card as a modal window:

```javascript
function showCart() {
    // Empty the cart every time it is displayed to ensure with the CART array  
    $("#products-cart").empty();

    // Traverse the CART array to access all products in the cart
    for(let i = 0; i < CART.length; i++) {

        // Generate each product's HTML
        const productHTML = getProductHTML(CART[i]);

        /* Append the cutomized HTML for each product to the cart
           container on the webpage */
        $("#products-cart").append(productHTML);
    }
}
```

Register `showCart()` as an event handler that responds to user clicks on the cart icon:

```javascript
$(document).ready(function(){

    showProducts(Object.values(PRODUCTS));

    // Register event handler for updating the cart when the user clicks the "Cart" button
    $("#show-cart").on("click", showCart);
});
```

## Task 2: Add remove from cart functionality

Create an event handler that remove products from the cart:

```javascript
function removeProduct() {
    // Use data property added in the showCart function to identify the product
    const productCartIndex = $(this).data("product-cart-index");

    CART.splice(productCartIndex, 1);

    // Display the entire cart again
    showCart();
}
```

Customize the product HTML in `showCart()` to register the event handler on the "Remove" button:

```javascript
...

// Customize the product's "Remove" button
productHTML.find(".product-action").
    text("Remove").
    on("click", removeProduct).
    // Add this data property to identify the product when it is removed from the cart
    data("product-cart-index", i);

...
```

## Task 3: Update cart total indicator

Create a function that updates the number of items in the cart:

```javascript
// Update cart items indicator at the top of the webpage
function updateCartTotal() {
    // Update number of items
    $("#cart-total").text(CART.length);
}
```

Call `updateCartTotal()` from `addProduct()` and `removeProduct()`.

