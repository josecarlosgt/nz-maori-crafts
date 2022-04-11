// Project JS

// Data structure containing all product data displayed on the webpage
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

/* An array representing products added to the cart. Each item in this array is a number representing the
   product's id in the PRODUCTS object */
const CART = [];

/* .ready(): https://api.jquery.com/ready/
    The .ready() method allow us to run JavaScript code as soon as the page's Document Object Model (DOM)
    becomes SAFE to manipulate. 
*/
$(document).ready(function(){

    // By default, show all products
    showProducts();

    // Register event handler for updating the cart when the user clicks the "Cart" button
    $("#show-cart").on("click", showCart);
});

/* Generates the HTML for displaying one product given its id in the
   PRODUCTS object. This function follows the clone-find-update approach:
    1. CLONE an HTML element to use as a template
    2. FIND the elements using selectors
    3. UPDATE the elements to customize their content
*/
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

        /* Customize the product's "Add to cart" button
           Since we are updating the same object several times, 
           we can use jQuery's chaining feature. 
        */
        productHTML.find(".product-action").
            text("Add to cart").
            on("click", addProduct).
            // Add this data property to identify the product when it is added to the cart
            data("product-id", product.id);
    }
}

// Adds a product to the cart
function addProduct() {
    // Use data property added in the showProducts function to identify the product
    const productId = $(this).data("product-id");

    CART.push(productId); 

    updateCartTotal();
}

// Show products in the cart
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

        // Customize the product's "Remove" button
        productHTML.find(".product-action").
            text("Remove").
            on("click", removeProduct).
            // Add this data property to identify the product when it is removed from the cart
            data("product-cart-index", i);
    }
}

// Removes product from the cart
function removeProduct() {
    // Use data property added in the showCart function to identify the product
    const productCartIndex = $(this).data("product-cart-index");

    CART.splice(productCartIndex, 1);

    // Display the entire cart again
    showCart();

    updateCartTotal();
}

// Update cart items indicator at the top of the webpage
function updateCartTotal() {
    // Update number of items
    $("#cart-total").text(CART.length);
}