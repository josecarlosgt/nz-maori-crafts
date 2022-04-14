# Workshop #1: Dynamic HTML
In this workshop, you will learn how to update dynamically the HTML of your web application.

In this workship, we will use the [Shop Homepage](https://startbootstrap.com/template/shop-homepage) template from the [Start Bootstrap website](https://startbootstrap.com/). 

Download the workshop materials from [here](https://github.com/josecarlosgt/nz-maori-crafts/raw/workshop-1-dynamic-html/nz-handicraft-workshop-1.zip).

## Web Application Overview

While New Zealand is well-known for its stunning landscapes, travelers often know overlook cultural crafts made by the indigenous people of New Zealand, the Maori. The purpose of this web application is to promote Maori handmade crafts as products available for purchase online.  

## Task 1: Add jQuery

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

## Task 2: Create a data structure for the products

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

## Task 3: Display the products dynamically

Before adding cart functionality, display the product dynamically on the application, so your code does not depend on the number of products or any product in specific.

To simplify our implementation and avoid inserting HTML in our JavaScript code, we will follow a clone-find-update approach to generate the HTML that displays each product: 

1. Use the [.clone()](https://api.jquery.com/clone/) method to copy an HTML element designed as template
2. Use the [.find()](https://api.jquery.com/find/) method to select the elements to be customized
3. Use diverse methods such as .text() and .on() to customize the template

This function generates the HTML for displaying one product given its id in the
PRODUCTS object using the clone-find-update approach.

```javascript
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

     // Customize the product's reviews    
    const starHTML = productHTML.find(".product-reviews").find("div");
    for(let starsCounter = 2; starsCounter <= product.stars; starsCounter++) {
        const newStartHTML = starHTML.clone();
        productHTML.find(".product-reviews").append(newStartHTML);
    }

    // Remove .d-none to make the product visible
    productHTML.removeClass("d-none");

    return productHTML;
}

```

Create a function that generates the HTML for displaying each product by calling `.getProductHTML()`:

```javascript
/**
    Show all products in the application's homepage

    @param    {array} products An array of objects containing all the products to be displayed
    @returns  No value.
*/
function showProducts(products) {
    // Sort products by the number of stars in descending order
    products.sort((product1, product2) => product2.stars - product1.stars);

    // Traverse the products object
    for(let product of products) {

        // Generate each product's HTML
        const productHTML = getProductHTML(product.id);

        /* Customize the product's "Add to cart" button
           Since we are updating the same object several times, 
           we can use jQuery's chaining feature. 
        */
        productHTML.find(".product-action").
            text("Add to cart");

        /* Finally, append the cutomized HTML for each product to the products
           container on the webpage */
        $('#products').append(productHTML);
    }
}
```

Call `.showProducts()`:

```javascript
/* .ready(): https://api.jquery.com/ready/
    The .ready() method allow us to run JavaScript code as soon as the page's Document Object Model (DOM)
    becomes SAFE to manipulate. 
*/
$(document).ready(function(){
    showProducts(Object.values(PRODUCTS));
});
```

> The [.ready()](https://api.jquery.com/ready/) method to run JavaScript code safetly as soon as the page's Document Object Model (DOM) become available.
