import { auth, db } from "./firebase.js";

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


const ADMIN_EMAIL = "shoaibahmad52535455@gmail.com";


/* LOGIN PAGE */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

  onAuthStateChanged(auth, (user) => {

    if (user && user.email === ADMIN_EMAIL) {
      window.location.href = "admin.html";
    }

  });


  loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value;

    const button =
      document.getElementById("loginBtn");

    const message =
      document.getElementById("loginMessage");


    button.disabled = true;
    button.textContent = "Logging in...";

    message.textContent = "";


    try {

      const result =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );


      if (result.user.email !== ADMIN_EMAIL) {

        await signOut(auth);

        throw new Error("Not authorized");

      }


      window.location.href = "admin.html";


    } catch (error) {

      console.error(error);

      message.textContent =
        error.message === "Not authorized"
          ? "This account does not have admin access."
          : "Login failed. Check your email and password.";

    } finally {

      button.disabled = false;
      button.textContent = "Login to Admin Panel";

    }

  });

}


/* ADMIN PAGE */

const adminPage =
  document.querySelector(".admin-body");

let allProducts = [];

if (adminPage) {

  onAuthStateChanged(auth, (user) => {

    if (!user || user.email !== ADMIN_EMAIL) {

      window.location.href = "admin-login.html";
      return;

    }


    document.getElementById("adminEmail").textContent =
      user.email;

    loadProducts();

  });

}


/* LOGOUT */

const logoutBtn =
  document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "admin-login.html";

  });

}


/* IMAGE PREVIEW */

const imageInput =
  document.getElementById("productImage");

const previewBox =
  document.getElementById("imagePreviewBox");


if (imageInput) {

  imageInput.addEventListener("input", () => {

    const url = imageInput.value.trim();

    if (!url) {

      previewBox.innerHTML =
        "<span>Image preview will appear here</span>";

      return;

    }


    previewBox.innerHTML = `
      <img
        src="${url}"
        alt="Product Preview"
        onerror="this.parentElement.innerHTML='<span>Invalid image URL</span>'"
      >
    `;

  });

}


/* ADD / UPDATE PRODUCT */

const productForm =
  document.getElementById("productForm");


if (productForm) {

  productForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const editId =
      document.getElementById("editProductId").value;


    const product = {

      name:
        document.getElementById("productName").value.trim(),

      cat:
        document.getElementById("productCategory").value,

      price:
        Number(
          document.getElementById("productPrice").value
        ),

      image:
        document.getElementById("productImage").value.trim(),

      desc:
        document.getElementById("productDescription").value.trim(),

      updatedAt:
        serverTimestamp()

    };


    const message =
      document.getElementById("formMessage");

    const saveButton =
      document.getElementById("saveProductBtn");


    try {

      saveButton.disabled = true;


      if (editId) {

        await updateDoc(
          doc(db, "products", editId),
          product
        );

        message.textContent =
          "✓ Product updated successfully!";

      } else {

        product.createdAt = serverTimestamp();

        await addDoc(
          collection(db, "products"),
          product
        );

        message.textContent =
          "✓ Product added successfully!";

      }


      resetForm();

      setTimeout(() => {
        message.textContent = "";
      }, 3000);


    } catch (error) {

      console.error(error);

      message.textContent =
        "❌ Error: " + error.message;

    } finally {

      saveButton.disabled = false;

    }

  });

}


/* LOAD PRODUCTS */

function loadProducts() {

  const productsRef =
    collection(db, "products");


  onSnapshot(productsRef, (snapshot) => {

    allProducts =
      snapshot.docs.map((item) => ({

        id: item.id,
        ...item.data()

      }));


    updateStats();
    renderAdminProducts(allProducts);

  }, (error) => {

    console.error("Firestore error:", error);

  });

}


/* RENDER PRODUCTS */

function renderAdminProducts(list) {

  const container =
    document.getElementById("adminProducts");

  if (!container) return;


  if (!list.length) {

    container.innerHTML = `
      <div class="no-products">
        <h3>No products found</h3>
        <p>Add your first product using the form above.</p>
      </div>
    `;

    return;

  }


  container.innerHTML =
    list.map((product) => `

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

    `).join("");


  addProductButtonEvents();

}


/* EDIT + DELETE BUTTON EVENTS */

function addProductButtonEvents() {

  document
    .querySelectorAll("[data-edit]")
    .forEach((button) => {

      button.addEventListener("click", () => {
        editProduct(button.dataset.edit);
      });

    });


  document
    .querySelectorAll("[data-delete]")
    .forEach((button) => {

      button.addEventListener("click", () => {
        deleteProduct(button.dataset.delete);
      });

    });

}


/* EDIT */

function editProduct(id) {

  const product =
    allProducts.find((item) => item.id === id);

  if (!product) return;


  document.getElementById("editProductId").value =
    product.id;

  document.getElementById("productName").value =
    product.name;

  document.getElementById("productCategory").value =
    product.cat;

  document.getElementById("productPrice").value =
    product.price;

  document.getElementById("productImage").value =
    product.image;

  document.getElementById("productDescription").value =
    product.desc;


  previewBox.innerHTML = `
    <img
      src="${product.image}"
      alt="${escapeHtml(product.name)}"
    >
  `;


  document.getElementById("formTitle").textContent =
    "Edit Product";

  document.getElementById("saveProductBtn").textContent =
    "✓ Update Product";

  document.getElementById("cancelEditBtn").style.display =
    "inline-flex";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* DELETE */

async function deleteProduct(id) {

  const product =
    allProducts.find((item) => item.id === id);

  if (!product) return;


  const confirmed =
    confirm(`Delete "${product.name}"?`);

  if (!confirmed) return;


  try {

    await deleteDoc(
      doc(db, "products", id)
    );

  } catch (error) {

    alert(
      "Error deleting product: " + error.message
    );

  }

}


/* CANCEL EDIT */

const cancelEditBtn =
  document.getElementById("cancelEditBtn");

if (cancelEditBtn) {

  cancelEditBtn.addEventListener(
    "click",
    resetForm
  );

}


function resetForm() {

  if (!productForm) return;

  productForm.reset();

  document.getElementById("editProductId").value = "";

  document.getElementById("formTitle").textContent =
    "Add New Product";

  document.getElementById("saveProductBtn").textContent =
    "+ Add Product";

  document.getElementById("cancelEditBtn").style.display =
    "none";


  if (previewBox) {

    previewBox.innerHTML =
      "<span>Image preview will appear here</span>";

  }

}


/* SEARCH */

const productSearch =
  document.getElementById("productSearch");


if (productSearch) {

  productSearch.addEventListener("input", () => {

    const query =
      productSearch.value.toLowerCase().trim();


    const filtered =
      allProducts.filter((product) =>

        product.name
          .toLowerCase()
          .includes(query)

        ||

        product.cat
          .toLowerCase()
          .includes(query)

      );


    renderAdminProducts(filtered);

  });

}


/* STATS */

function updateStats() {

  const totalProducts =
    allProducts.length;


  const totalValue =
    allProducts.reduce(
      (total, product) =>
        total + Number(product.price || 0),
      0
    );


  const categories =
    new Set(
      allProducts.map(
        (product) => product.cat
      )
    );


  document.getElementById("totalProducts").textContent =
    totalProducts;


  document.getElementById("totalValue").textContent =
    "$" + totalValue.toFixed(0);


  document.getElementById("totalCategories").textContent =
    categories.size;

}


/* HTML SECURITY */

function escapeHtml(text) {

  const div = document.createElement("div");

  div.textContent = text || "";

  return div.innerHTML;

}
