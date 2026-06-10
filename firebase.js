import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvJkwHK5d_2PQlOxJkp89yODI3Sfg9Zes",
  authDomain: "campus-navigation-kiosk.firebaseapp.com",
  projectId:"campus-navigation-kiosk",
  storageBucket: "campus-navigation-kiosk.appspot.com",
  messagingSenderId: "279195798205",
  appId: "1:279195798205:web:0254baa608de440fb505d4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);