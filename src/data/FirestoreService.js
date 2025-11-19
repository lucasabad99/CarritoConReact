// Import Firebase SDK
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc
} from "firebase/firestore";
import data from "./data"; // Tu array de productos
import CartContainer from "../Components/CartContainer";

// Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY,
  authDomain: import.meta.env.VITE_FS_AUTH,
  projectId: import.meta.env.VITE_FS_PROJECTID,
  storageBucket: import.meta.env.VITE_FS_BUCKET,
  messagingSenderId: "306198768469",
  appId: import.meta.env.VITE_FS_APPID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ✅ Obtener todos los productos
async function getData() {
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return dataDocs;
}

// ✅ Obtener producto por ID
export async function getProductById(idParam) {
  const docRef = doc(db, "products", idParam);
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  const idDoc = docSnapshot.id;
  return { ...docData, id: idDoc };
}

// ✅ Obtener productos por categoría
export async function getProductsByCategory(catParam) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", catParam)); // category en minúsculas
  const productsSnapshot = await getDocs(q);
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return dataDocs;
}

// ✅ Crear orden de compra
export async function createBuyOrder(orderData) {
  const orderRef = collection(db, "orders");
  const newDoc = await addDoc(orderRef, orderData);
  console.log(newDoc);
  return newDoc;
}


export async function exportProducts() {
  const productsRef = collection(db, "products");
  for (let item of data) {
    const q = query(productsRef, where("title", "==", item.title));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      const { id, ...rest } = item;
      const newDoc = await addDoc(productsRef, rest);
      console.log("Documento creado:", newDoc.id);
    } else {
      console.log(`Producto "${item.title}" ya existe`);
    }
  }
}


export default getData;