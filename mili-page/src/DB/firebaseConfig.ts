import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase (obtén esto desde Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCS79gj9ouNV6jle-b_LJxykAomhAEo7pc",
  authDomain: "universidad-docs.firebaseapp.com",
  projectId: "universidad-docs",
  storageBucket: "universidad-docs.firebasestorage.app",
  messagingSenderId: "606276105151",
  appId: "1:606276105151:web:aefc7a2e972e22ae13670a",
  measurementId: "G-8KZFVE9YKL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
