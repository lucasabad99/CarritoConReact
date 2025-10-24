import data from './data.js';


function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}


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
  })
}

export function getProductByCategory(catParam) {
  return new Promise((resolve) => {
    const itemRequested = data.filter(item => {return item.category === catParam});
    setTimeout(() => {
      resolve(itemRequested);
    }, 500);
  });
}

export default getData;
