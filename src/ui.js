/*********************************************************************
 *                          Maori Fine Crafts Site                   *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

/* An array representing products added to the cart. Each item in this array is a number representing the
product's id in the PRODUCTS object */
const CART = [];

/**
   Generates the HTML for displaying one product given its id in the
   PRODUCTS object. This function follows a clone-find-update approach:
   1. CLONE an HTML element to use as a template
   2. FIND the elements using selectors
   3. UPDATE the elements to customize their content
 
   @param    {number} productId An identifier in the PRODUCTS object to display
 
   @returns  {string} A string with the HTML of the product.
*/
function getProductHTML(productId) {
    // Obtain product data from the PRODUCTS object
    const product = window.PRODUCTS[productId];

    // CLONE an HTML element to use as a template
    const productHTML = $("#product-template").clone();

    // Delete id to avoid duplicates
    productHTML.prop('id', '');

    // FIND and UPDATE the product's name
    /* Since we are updating the same object several times, 
    we can use jQuery's chaining feature. */
    productHTML
        .find(".product-name")
        .text(product.name);

    // FIND and UPDATE the product's price
    productHTML
        .find(".product-price")
        .text(product.price.toFixed(2));

    // FIND and UPDATE the product's image properties
    productHTML
        .find("img")
        .prop("src", product.image)
        .prop("alt", product.name);

    // Customize the product's reviews    
    const starHTML = productHTML.find(".product-reviews").find("div");
    for (let starsCounter = 2; starsCounter <= product.stars; starsCounter++) {
        const newStartHTML = starHTML.clone();
        productHTML
            .find(".product-reviews")
            .append(newStartHTML);
    }

    // Customize the product's "Add to cart" button
    productHTML
        .find(".product-action")
        .text("Add to cart");

    // Remove .d-none to make the product visible
    productHTML.removeClass("d-none");

    return productHTML;
}

/**
    Show all products in the application's homepage
 
    @param    {array} products An array of objects containing all the products to be displayed
    @returns  No value.
*/
function showProducts(products) {
    // Sort products by the number of stars in descending order
    // Array.prototype.sort()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    products.sort((product1, product2) => product2.stars - product1.stars);

    // Traverse the products array
    for (let product of products) {
        const productHTML = getProductHTML(product.id);

        /* Customize the product's "Add to cart" button
           Since we are updating the same object several times, 
           we can use jQuery's chaining feature. 
        */
        productHTML
            .find(".product-action")
            .text("Add to cart")
            .on("click", addProduct).
            // Add this data property to identify the product when it is added to the cart
            data("product-id", product.id);

        /* Finally, append the cutomized HTML for each product to the products
           container on the webpage */
        $('#products').append(productHTML);
    }
}

/**
    Add a product to the shopping cart
 
    @returns  No value.
*/
function addProduct() {
    // Use data property added in the showProducts function to identify the product
    const productId = $(this).data("product-id");

    CART.push(productId);

    updateCartTotal();
}

/**
    Removes a product from the shopping cart
 
    @returns  No value.
*/
function removeProduct() {
    // Use data property added in the showCart function to identify the product
    const productCartIndex = $(this).data("product-cart-index");

    CART.splice(productCartIndex, 1);

    updateCartTotal();

    // Use data property added in the showCart function to identify and remove the product
    $("#product-cart-index-" + productCartIndex).fadeOut(
        "fast",
        // After the product fades out, display the entire cart again. 
        showCart);
}

/**
    Displays the shopping cart
 
    @returns  No value.
*/
function showCart() {
    // Empty the cart every time it is displayed  
    $("#products-cart").empty();

    // Traverse the CART array to access all products in the cart
    for (let i = 0; i < CART.length; i++) {

        // Generate each product's HTML
        const productHTML = getProductHTML(CART[i]);

        /* Add an id to the product's root HTML element to facilitate its removal
         when the users removes this product from the cart */
        productHTML.prop('id', "product-cart-index-" + i);

        // Customize the product's "Remove" button
        productHTML
            .find(".product-action")
            .text("Remove")
            .on("click", removeProduct).
            // Add this data property to identify the product when it is removed from the cart
            data("product-cart-index", i);

        // Display product images in the cart smaller (50% of their original size)
        productHTML
            .find(".card-img-top")
            .addClass("w-50");

        /* Finally, append the cutomized HTML for each product to the cart
           container on the webpage */
        $("#products-cart").append(productHTML);
    }

    // Display empty cart message depending on number of items in the cart
    if (CART.length == 0) {
        $("#empty-cart").fadeIn();
    } else {
        $("#empty-cart").fadeOut();
    }
}

/**
    Update the number of items in the cart shown at the top of the webpage
 
    @returns  No value.
*/
function updateCartTotal() {
    // Update number of items
    $("#cart-total").text(CART.length);

    /* Switch the cart icon at the top of the webpage to reflect the cart status:
       empty or not empty. */
    if (CART.length == 0) {
        $("#show-cart").find("i").removeClass("bi-cart-fill").addClass("bi-cart2");
    } else {
        $("#show-cart").find("i").removeClass("bi-cart2").addClass("bi-cart-fill");
    }
}

/**
    Filters the products displayed on the main web page according to the user-entered query on
    the search bar
 
    @returns  No value.
*/
function search() {
    $("#products").empty();

    const query = $("#searchQuery").val().toLowerCase().trim();
    let results = [];

    if (query.length > 0) {
        for (let productId in window.PRODUCTS) {
            const product = window.PRODUCTS[productId];

            if (product.name.toLowerCase().includes(query)
                || product.description.toLowerCase().includes(query)) {

                results.push(product);
            }
        }
    } else {
        results = Object.values(window.PRODUCTS);
    }

    showProducts(results);
}

/**
   Initializes the UI.
 
    @returns  No value.
*/
export default function initializeUI() {
    /*
    Use Object.values() to generate an array of products that
    facilitates the handling the products data
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    */
    showProducts(Object.values(window.PRODUCTS));

    // Register event handler for updating the cart when the user clicks the "Cart" button
    $("#show-cart").on("click", showCart);

    // Register event handler for live search when the user types something on the "search" input
    $("#searchQuery").on("keyup", search);
}
