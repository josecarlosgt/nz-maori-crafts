import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBeLf6DG6zsvg5ohG2J5ZndgQKBAQ1ekcA",
    authDomain: "nz-maori-crafts.firebaseapp.com",
    projectId: "nz-maori-crafts",
    storageBucket: "nz-maori-crafts.appspot.com",
    messagingSenderId: "59577216769",
    appId: "1:59577216769:web:d4e55de1b006c980c9f500"
};

export default function retrieveProducts(startUI) {
    // Initialize firebase app
    initializeApp(firebaseConfig);

    // Initialize services
    const db = getFirestore();

    // Get reference to products collection 

    const colRef = collection(db, 'products');

    // Get collection content
    getDocs(colRef)
        .then(snapshot => {
            // console.log(snapshot.docs);
            let products = {};
            snapshot.docs.forEach(doc => {
                products[doc.data().id] = { ...doc.data() };
            });

            console.log(products);
            window.PRODUCTS = products;
            startUI();
        });
    // Data structure containing all product data displayed on the webpage
    let x = {
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

}