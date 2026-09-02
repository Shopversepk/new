import {
  auth,
  db,
  storage
} from "./firebase.js";


import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


const ADMIN_EMAIL =
  "shoaibahmad52535455@gmail.com";


let allProducts = [];

let selectedImageMode = "url";


/* ==========================================
   LOGIN
========================================== */

const loginForm =
  document.getElementById("loginForm");


if (loginForm) {

  onAuthStateChanged(auth, (user) => {

    if (
      user &&
      user.email === ADMIN_EMAIL
    ) {

      window.location.href =
        "admin.html";

    }

  });


  loginForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();


      const email =
        document
          .getElementById("email")
          .value
          .trim();


      const password =
        document
          .getElementById("password")
          .value;


      const button =
        document
          .getElementById("loginBtn");


      const message =
        document
          .getElementById("loginMessage");


      button.disabled = true;

      button.textContent =
        "Logging in...";


      try {

        const result =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );


        if (
          result.user.email !== ADMIN_EMAIL
        ) {

          await signOut(auth);

          throw new Error(
            "Not authorized"
          );

        }


        window.location.href =
          "admin.html";


      } catch (error) {

        console.error(error);


        message.textContent =
          "Login failed. Check your email and password.";


      } finally {

        button.disabled = false;

        button.textContent =
          "Login to Admin Panel";

      }

    }
  );

}


/* ==========================================
   ADMIN SECURITY
========================================== */

const adminPage =
  document.querySelector(".admin-body");


if (adminPage) {

  onAuthStateChanged(auth, (user) => {

    if (
      !user ||
      user.email !== ADMIN_EMAIL
    ) {

      window.location.href =
        "admin-login.html";

      return;

    }


    const adminEmail =
      document.getElementById(
        "adminEmail"
      );


    if (adminEmail) {

      adminEmail.textContent =
        user.email;

    }


    loadProducts();

  });

}


/* ==========================================
   LOGOUT
========================================== */

const logoutBtn =
  document.getElementById("logoutBtn");


if (logoutBtn) {

  logoutBtn.addEventListener(
    "click",
    async () => {

      await signOut(auth);

      window.location.href =
        "admin-login.html";

    }
  );

}


/* ==========================================
   IMAGE MODE
========================================== */

const urlTabBtn =
  document.getElementById("urlTabBtn");


const uploadTabBtn =
  document.getElementById("uploadTabBtn");


const urlImageBox =
  document.getElementById("urlImageBox");


const uploadImageBox =
  document.getElementById("uploadImageBox");


function setImageMode(mode) {

  selectedImageMode = mode;


  if (mode === "url") {

    urlImageBox.style.display =
      "block";

    uploadImageBox.style.display =
      "none";


    urlTabBtn.classList.add("active");

    uploadTabBtn.classList.remove("active");

  }


  if (mode === "upload") {

    urlImageBox.style.display =
      "none";

    uploadImageBox.style.display =
      "block";


    uploadTabBtn.classList.add("active");

    urlTabBtn.classList.remove("active");

  }

}


if (urlTabBtn) {

  urlTabBtn.addEventListener(
    "click",
    () => setImageMode("url")
  );

}


if (uploadTabBtn) {

  uploadTabBtn.addEventListener(
    "click",
    () => setImageMode("upload")
  );

}


/* ==========================================
   IMAGE PREVIEW - URL
========================================== */

const imageInput =
  document.getElementById("productImage");


const imageFileInput =
  document.getElementById("productImageFile");


const previewBox =
  document.getElementById("imagePreviewBox");


function showPreview(url) {

  if (!previewBox) return;


  previewBox.innerHTML = `
    <img
      src="${url}"
      alt="Product Preview"
      onerror="
        this.parentElement.innerHTML =
        '<span>Invalid image</span>'
      "
    >
  `;

}


if (imageInput) {

  imageInput.addEventListener(
    "input",
    () => {

      const url =
        imageInput.value.trim();


      if (!url) {

        previewBox.innerHTML =
          "<span>Image preview will appear here</span>";

        return;

      }


      showPreview(url);

    }
  );

}


/* ==========================================
   IMAGE PREVIEW - FILE
========================================== */

if (imageFileInput) {

  imageFileInput.addEventListener(
    "change",
    () => {

      const file =
        imageFileInput.files[0];


      if (!file) return;


      const localURL =
        URL.createObjectURL(file);


      showPreview(localURL);

    }
  );

}


/* ==========================================
   UPLOAD IMAGE TO FIREBASE
========================================== */

async function uploadProductImage(file) {

  const extension =
    file.name.split(".").pop();


  const fileName =
    `products/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${extension}`;


  const storageRef =
    ref(
      storage,
      fileName
    );


  await uploadBytes(
    storageRef,
    file
  );


  const downloadURL =
    await getDownloadURL(
      storageRef
    );


  return downloadURL;

}


/* ==========================================
   ADD / UPDATE PRODUCT
========================================== */

const productForm =
  document.getElementById("productForm");


if (productForm) {

  productForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();


      const saveButton =
        document.getElementById(
          "saveProductBtn"
        );


      const message =
        document.getElementById(
          "formMessage"
        );


      const editId =
        document.getElementById(
          "editProductId"
        ).value;


      try {

        saveButton.disabled = true;

        saveButton.textContent =
          "Saving...";


        let imageURL = "";


        /* URL IMAGE */

        if (
          selectedImageMode === "url"
        ) {

          imageURL =
            imageInput.value.trim();


          if (!imageURL) {

            throw new Error(
              "Please enter an image URL."
            );

          }

        }


        /* FILE IMAGE */

        if (
          selectedImageMode === "upload"
        ) {

          const file =
            imageFileInput.files[0];


          if (!file && !editId) {

            throw new Error(
              "Please select an image from gallery."
            );

          }


          if (file) {

            saveButton.textContent =
              "Uploading Image...";


            imageURL =
              await uploadProductImage(file);

          } else {

            const oldProduct =
              allProducts.find(
                product =>
                  product.id === editId
              );


            imageURL =
              oldProduct?.image || "";

          }

        }


        const product = {

          name:
            document
              .getElementById("productName")
              .value
              .trim(),


          cat:
            document
              .getElementById("productCategory")
              .value,


          price:
            Number(
              document
                .getElementById("productPrice")
                .value
            ),


          image:
            imageURL,


          desc:
            document
              .getElementById("productDescription")
              .value
              .trim(),


          updatedAt:
            serverTimestamp()

        };


        saveButton.textContent =
          "Saving Product...";


        if (editId) {

          await updateDoc(

            doc(
              db,
              "products",
              editId
            ),

            product

          );


          message.textContent =
            "✓ Product updated successfully!";


        } else {

          product.createdAt =
            serverTimestamp();


          await addDoc(

            collection(
              db,
              "products"
            ),

            product

          );


          message.textContent =
            "✓ Product added successfully!";

        }


        resetForm();


      } catch (error) {

        console.error(error);


        message.textContent =
          "❌ " + error.message;


      } finally {

        saveButton.disabled = false;

        saveButton.textContent =
          "+ Add Product";

      }

    }
  );

}


/* ==========================================
   LOAD PRODUCTS
========================================== */

function loadProducts() {

  const productsRef =
    collection(
      db,
      "products"
    );


  onSnapshot(

    productsRef,

    (snapshot) => {

      allProducts =
        snapshot.docs.map(
          (item) => ({

            id: item.id,

            ...item.data()

          })
        );


      updateStats();

      renderAdminProducts(
        allProducts
      );

    },

    (error) => {

      console.error(
        "Firestore error:",
        error
      );

    }

  );

}


/* ==========================================
   RENDER PRODUCTS
========================================== */

function renderAdminProducts(list) {

  const container =
    document.getElementById(
      "adminProducts"
    );


  if (!container) return;


  if (!list.length) {

    container.innerHTML = `
      <div class="no-products">
        <h3>No products found</h3>
        <p>Add your first product.</p>
      </div>
    `;

    return;

  }


  container.innerHTML =
    list.map(
      (product) => `

      <article class="admin-product-card">

        <img
          src="${product.image}"
          alt="${escapeHtml(product.name)}"
          loading="lazy"
        >


        <div class="admin-product-info">

          <span class="product-category">
            ${escapeHtml(product.cat)}
          </span>


          <h3>
            ${escapeHtml(product.name)}
          </h3>


          <div class="admin-price">
            $${Number(product.price).toFixed(2)}
          </div>


          <p>
            ${escapeHtml(product.desc)}
          </p>


          <div class="product-actions">

            <button
              class="edit-btn"
              data-edit="${product.id}"
            >
              ✏️ Edit
            </button>


            <button
              class="delete-btn"
              data-delete="${product.id}"
            >
              🗑 Delete
            </button>

          </div>

        </div>

      </article>

    `
    ).join("");


  addProductButtonEvents();

}


/* ==========================================
   BUTTON EVENTS
========================================== */

function addProductButtonEvents() {

  document
    .querySelectorAll("[data-edit]")
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            editProduct(
              button.dataset.edit
            );

          }
        );

      }
    );


  document
    .querySelectorAll("[data-delete]")
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            deleteProduct(
              button.dataset.delete
            );

          }
        );

      }
    );

}


/* ==========================================
   EDIT PRODUCT
========================================== */

function editProduct(id) {

  const product =
    allProducts.find(
      item => item.id === id
    );


  if (!product) return;


  document
    .getElementById("editProductId")
    .value =
    product.id;


  document
    .getElementById("productName")
    .value =
    product.name;


  document
    .getElementById("productCategory")
    .value =
    product.cat;


  document
    .getElementById("productPrice")
    .value =
    product.price;


  document
    .getElementById("productDescription")
    .value =
    product.desc;


  setImageMode("url");


  imageInput.value =
    product.image;


  showPreview(
    product.image
  );


  document
    .getElementById("formTitle")
    .textContent =
    "Edit Product";


  document
    .getElementById("saveProductBtn")
    .textContent =
    "✓ Update Product";


  document
    .getElementById("cancelEditBtn")
    .style.display =
    "inline-flex";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ==========================================
   DELETE PRODUCT
========================================== */

async function deleteProduct(id) {

  const product =
    allProducts.find(
      item => item.id === id
    );


  if (!product) return;


  if (
    !confirm(
      `Delete "${product.name}"?`
    )
  ) return;


  try {

    await deleteDoc(
      doc(
        db,
        "products",
        id
      )
    );

  } catch (error) {

    alert(
      "Delete error: " +
      error.message
    );

  }

}


/* ==========================================
   RESET FORM
========================================== */

const cancelEditBtn =
  document.getElementById(
    "cancelEditBtn"
  );


if (cancelEditBtn) {

  cancelEditBtn.addEventListener(
    "click",
    resetForm
  );

}


function resetForm() {

  if (!productForm) return;


  productForm.reset();


  document
    .getElementById("editProductId")
    .value = "";


  selectedImageMode = "url";


  setImageMode("url");


  document
    .getElementById("formTitle")
    .textContent =
    "Add New Product";


  document
    .getElementById("cancelEditBtn")
    .style.display =
    "none";


  if (previewBox) {

    previewBox.innerHTML =
      "<span>Image preview will appear here</span>";

  }

}


/* ==========================================
   SEARCH
========================================== */

const productSearch =
  document.getElementById(
    "productSearch"
  );


if (productSearch) {

  productSearch.addEventListener(
    "input",
    () => {

      const query =
        productSearch.value
          .toLowerCase()
          .trim();


      const filtered =
        allProducts.filter(
          product =>

            product.name
              .toLowerCase()
              .includes(query)

            ||

            product.cat
              .toLowerCase()
              .includes(query)

        );


      renderAdminProducts(
        filtered
      );

    }
  );

}


/* ==========================================
   STATS
========================================== */

function updateStats() {

  const total =
    allProducts.length;


  const value =
    allProducts.reduce(
      (sum, product) =>
        sum +
        Number(product.price || 0),
      0
    );


  const categories =
    new Set(
      allProducts.map(
        product => product.cat
      )
    );


  document
    .getElementById("totalProducts")
    .textContent =
    total;


  document
    .getElementById("totalValue")
    .textContent =
    "$" + value.toFixed(0);


  document
    .getElementById("totalCategories")
    .textContent =
    categories.size;

}


/* ==========================================
   ESCAPE HTML
========================================== */

function escapeHtml(text) {

  const div =
    document.createElement("div");


  div.textContent =
    text || "";


  return div.innerHTML;

}
