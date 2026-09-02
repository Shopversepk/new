import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyDNalxw0dcts_d_cow2yZ52QoHPqPdxRQI",
  authDomain: "shopverse-ed722.firebaseapp.com",
  projectId: "shopverse-ed722",
  storageBucket: "shopverse-ed722.firebasestorage.app",
  messagingSenderId: "900614368273",
  appId: "1:900614368273:web:138db73b6d2e0c3d1495b0",
  measurementId: "G-JVMYRXVRH0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


export {
  app,
  auth,
  db,
  storage
};
