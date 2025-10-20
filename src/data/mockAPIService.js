import data from './data.js';

// Devuelve todos los productos
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promesa cumplida pa");
      resolve(data);
    }, 1000);
  });
}

// ✅ Devuelve un producto por su id
export function getProductById(idParam) {
  return new Promise((resolve, reject) => {
    const itemRequested = data.find((item) => String(item.id) === idParam);
    setTimeout(() => {
      if (itemRequested) {
        resolve(itemRequested);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 500);
  });
}

export default getData;

