// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import cartContext from "../context/cartContext";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCLpbQw9lfYEPSk_b0UasMC1kmimssOl0s",
  authDomain: "react-lubad.firebaseapp.com",
  projectId: "react-lubad",
  storageBucket: "react-lubad.firebasestorage.app",
  messagingSenderId: "306198768469",
  appId: "1:306198768469:web:caa2320f31398cb6291ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData(){
const productsRef = collection(db, products);
const productsSnapshot = await getDocs(productsRef)
console.log(productsSnapshot);
}

export default getData;