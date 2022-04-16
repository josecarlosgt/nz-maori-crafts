/*********************************************************************
 *                          Maori Fine Crafts Site                   *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

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
    productHTML.find(".product-name").text(product.name);
    productHTML.find(".product-price").text(product.price.toFixed(2));

    // FIND and UPDATE the product's image properties
    productHTML.find("img").
        prop("src", product.image).
        prop("alt", product.name);

    // Customize the product's reviews    
    const starHTML = productHTML.find(".product-reviews").find("div");
    for (let starsCounter = 2; starsCounter <= product.stars; starsCounter++) {
        const newStartHTML = starHTML.clone();
        productHTML.find(".product-reviews").append(newStartHTML);
    }

    // Remove .d-none to make the product visible
    productHTML.removeClass("d-none");

    return productHTML;
}

/**
    Show all products in the application's homepage

    @returns  No value.
*/
function showProducts() {
    // Traverse the products object
    for (let productId in PRODUCTS) {
        const product = PRODUCTS[productId];

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

showProducts();