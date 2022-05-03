import retrieveProducts from './db.js';
import initializeUI from './ui.js';

const startUI = () => {
    /* .ready(): https://api.jquery.com/ready/
        The .ready() method allow us to run JavaScript code as soon as the page's Document Object Model (DOM)
        becomes SAFE to manipulate. 
    */
    $(document).ready(function () {
        initializeUI();
    });
}

retrieveProducts(startUI);
