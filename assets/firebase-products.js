import { db } from "./firebase.js";


import {
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const productsRef =
  collection(
    db,
    "products"
  );


onSnapshot(

  productsRef,

  (snapshot) => {


    const firebaseProducts =
      snapshot.docs.map(
        (document, index) => {

          const data =
            document.data();


          return {

            // Unique ID for website links
            id:
              "firebase-" +
              document.id,


            firestoreId:
              document.id,


            source:
              "firebase",


            name:
              data.name ||
              "Unnamed Product",


            cat:
              data.cat ||
              "Other",


            price:
              Number(
                data.price || 0
              ),


            image:
              data.image ||
              "",


            desc:
              data.desc ||
              ""

          };

        }
      );


    // Existing hardcoded products + Firebase products
    window.products =
      products.filter(
        product =>
          product.source !== "firebase"
      );


    window.products.push(
      ...firebaseProducts
    );


    console.log(
      "Firebase products loaded:",
      firebaseProducts.length
    );


    // Refresh current page
    if (
      typeof window.refreshShop ===
      "function"
    ) {

      window.refreshShop();

    }


    // INDEX PAGE
    if (
      document.getElementById("products")
    ) {

      if (
        typeof window.renderProducts ===
        "function"
      ) {

        window.renderProducts(
          "products",
          window.products.slice(0, 8)
        );

      }

    }


  },

  (error) => {

    console.error(
      "Firebase products error:",
      error
    );

  }

);
