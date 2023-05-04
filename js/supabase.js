/*********************************************************************
 *                          Maori Fine Crafts Site                   *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

(async (window) => {
    const supabaseURL = 'https://fwrtwvfzzgxthkikeamp.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cnR3dmZ6emd4dGhraWtlYW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0NDg1NTMsImV4cCI6MTk5ODAyNDU1M30.8g9LlgBbMW7nmIUanhm_vbZ9oEzDthmJkIM9_3Dmj8s';

    const supabaseDB = supabase.createClient(supabaseURL, supabaseKey);

    /* Id of guest customer to be used when storing cart items */
    const GUEST_ID = 1;

    /**
        Submit cart's content for storage in Supabase
    
        @returns  No value.
    */
    window.addCartItems = async function submitCart() {
        const cartProducts = CART.map(productId => ( {product_id: productId, customer_id: GUEST_ID} ));

        const {data : insert, error} = await supabaseDB
        .from('Cart_Item')
        .insert(cartProducts);

        if(error) {
            console.log("*** ERROR:", error);
            return false;
        }

        return true;
    }

    /* 
    Destructuring variable assignment
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    */
    const {data : products, error} = await supabaseDB
        .from('Product')
        .select('*');

    /* 
    Make the products data globally available through the window object
        https://developer.mozilla.org/en-US/docs/Web/API/Window
    */
    window.PRODUCTS = products;

    $(document).ready(function () {
        showProducts(PRODUCTS);
    });    
})(window);
