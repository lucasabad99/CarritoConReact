// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, getDoc, doc, query, where, addDoc} from "firebase/firestore";

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
const productsRef = collection(db, "products");
const productsSnapshot = await getDocs(productsRef);
const docs = productsSnapshot.docs;
const dataDocs = docs.map(item => {  
  return {...item.data(), id: item.id}
});
return dataDocs;

}


export async function getProductById(idParam){
 const docRef = doc(db, "products", idParam)
 const docSnapshot = await getDoc(docRef);
 const docData = docSnapshot.data()
 const idDoc = docSnapshot.id
 return { ...docData, id: idDoc };
}

export async function getProductsByCategory(catParam){
  const productsRef = collection(db, "products")

  const q = query(productsRef, where("Category", "==", catParam));

  const productsSnapshot = await getDocs(q)
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => { return {...item.data(), id: item.id}
})
return dataDocs;
}

export async function createBuyOrder(orderData){
  const orderRef = collection(db, "orders")
  const newDoc = await addDoc(orderRef, orderData)
  console.log(newDoc);
  return newDoc;
  }

  export async function exportProducts(){
    const productsRef = collection(db, "products")
    for(let item of data){
      delete item.id;
      const newDoc =await addDoc(productsRef, item)
      console.log("doc creado", newDoc.id)
    }
  }


export default getData;