/*********************************************************************
 *                          Maori Fine Crafts Site                   *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

/* 
  Avoid creating global variables by implementing all the application
  inside an Immediately Invoked Function Expression (IIFE).
*/
(function () {
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
        for(let product of products) {
            const productHTML = getProductHTML(product.id);
            $('#products').append(productHTML);
        }
    }

    /* .ready(): https://api.jquery.com/ready/
        The .ready() method allow us to run JavaScript code as soon as the page's Document Object Model (DOM)
        becomes SAFE to manipulate. 
    */
    $(document).ready(function () {
        
        // Generate an array of products to facilitate handling the products data
        let products = [];

        /* Approach #1
        Use jQuery.each()
        https://api.jquery.com/jquery.each/
        */
        $.each(PRODUCTS, function (productId, product) {
            products.push(product);
        });

        /* Approach #2 (preferred)
        Use Object.values()
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
        */

        products = Object.values(PRODUCTS);
        showProducts(products);
    });
})();
