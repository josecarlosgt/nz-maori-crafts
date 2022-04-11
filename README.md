# Tutorial: Creating a Shopping Cart
In this tutorial, you will learn how to add basic cart features to your web application.

In this tutorial, we will use the [Shop Homepage](https://startbootstrap.com/template/shop-homepage) template from the [Start Bootstrap website](https://startbootstrap.com/). 

## Web Application Overview

While New Zealand is well-known for its stunning landscapes, travelers often know overlook cultural crafts made by the indigenous people of New Zealand, the Maori. The purpose of this web application is to promote Maori handmade crafts as products available for purchase online.  

## Part I: Add jQuery

In the index.html file, add the latest version of jQuery to your application using a Google's CDN: 

```html
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

Add the latest version of jQuery to your application using a Google's CDN: 

```html
<!-- My JS -->
<script src="js/scripts.js"></script>
```

> Both script tags should appear just before the closing body tag.

On the file js/scripts.js, use the [.ready()](https://api.jquery.com/ready/) method to run JavaScript code safetly as soon as the page's Document Object Model (DOM) become available.

```javascript
$(document).ready(function(){
    // YOUR CODE HERE
});    
```

## Part II: Create a data structure for the products

The following data structure contains all the data of the products promoted by the application:

```javascript
const PRODUCTS = {
    product_1: {
        id: "product_1",
        name: "Hand-Carved Maori Pendant",
        description: "Hand-carved traditional Maori style bone Koru pendant",
        price: 50,
        stars: 1,
        image: "assets/img/products/pendant.jpeg" 
    }, product_2: {
        id: "product_2",
        name: "Model War Canoe",
        description: "Maori model war canoe of carved wood, with a raised stern and a prow in the shape of a human head",
        price: 200,
        stars: 5,
        image: "assets/img/products/canoe.jpeg"  
    }, product_3: {
        id: "product_3",
        name: "Maori Warrior Figure",
        description: "Vintage prominent Maori Tekoteko warrior figure",
        price: 30,
        stars: 4,
        image: "assets/img/products/figure.jpeg" 
    }, product_4: {
        id: "product_4",
        name: "Handicraft Brass Flower Vase",
        description: "This fine Maori work is a handcrafted piece of brassware considered highly attractive and artistic",
        price: 150,
        stars: 2,
        image: "assets/img/products/vase.jpeg" 
    }, product_5: {
        id: "product_5",
        name: "Natural Paua Shell Beads",
        description: "Approximately 15 to 17 Abalone 15x25 mm beads on a 15-inch strand",
        price: 50,
        stars: 3,
        image: "assets/img/products/beats.jpeg"  
    }
};
```

## Part III: Display the products dynamically

Before adding cart functionality, display the product dynamically on the application, so your code does not depend on the number of products or any product in specific.

To simplify our implementation and avoid inserting HTML in our JavaScript code, we will follow a clone-find-update approach to generate the HTML that displays each product: 

1. Use the [.clone()](https://api.jquery.com/clone/) method to copy an HTML element designed as template
2. Use the [.find()](https://api.jquery.com/find/) method to select the elements to be customized
3. Use diverse methods such as .text() and .on() to customize the template

This function generates the HTML for displaying one product given its id in the
PRODUCTS object using the clone-find-update approach.

```javascript
function getProductHTML(productId) {
    // Obtain product data from the PRODUCTS object
    const product = PRODUCTS[productId];   

    // CLONE an HTML element to use as a template
    const productHTML = $( "#product-template" ).clone();

     // Delete id to avoid duplicates
    productHTML.prop('id', '');   

    // FIND and UPDATE the product's name
    productHTML.find(".product-name").text(product.name);
    productHTML.find(".product-price").text(product.price.toFixed(2));
 
    // FIND and UPDATE the product's image properties
    productHTML.find("img").
        prop("src", product.image).
        prop("alt", product.name);

    // Remove .d-none to make the product visible
    productHTML.removeClass("d-none");

    return productHTML;
}
```

Create a function that generates the HTML for displaying each product by calling `.getProductHTML()`:

```javascript
// Show all products
function showProducts() {
    // Traverse the products object
    for(let productId in PRODUCTS) {
        const product = PRODUCTS[productId];

        // Generate each product's HTML
        const productHTML = getProductHTML(product.id);

        /* Append the cutomized HTML for each product to the products
           container on the webpage */
        $("#products").append(productHTML);
    }
}
```

Call `.showProducts()`:

```javascript
$(document).ready(function(){

    // By default, show all products
    showProducts();
});
```

## Part IV: Add add to cart functionality

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

    // By default, show all products
    showProducts();

    // Register event handler for updating the cart when the user clicks the "Cart" button
    $("#show-cart").on("click", showCart);
});
```

## Part V: Add remove from cart functionality

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

## Part VI: Update cart total indicator

Create a function that updates the number of items in the cart:

```javascript
// Update cart items indicator at the top of the webpage
function updateCartTotal() {
    // Update number of items
    $("#cart-total").text(CART.length);
}
```

Call `updateCartTotal()` from `addProduct()` and `removeProduct()`.
