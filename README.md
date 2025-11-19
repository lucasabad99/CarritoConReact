# 🛒 CarritoConReact

Proyecto desarrollado en **React** que implementa un carrito de compras dinámico, con navegación mediante **React Router**, gestión de estado global con **Context API**, y conexión a **Firebase Firestore** para persistencia de datos.

✅ **Demo en Producción:**  
[https://carrito-con-react.vercel.app/]

---

## 📚 Índice
1. [Descripción](#descripción)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Componentes Principales](#componentes-principales)
4. [Conexión a Firestore](#conexión-a-firestore)
5. [Dependencias](#dependencias)
6. [Variables de Entorno y Seguridad](#variables-de-entorno-y-seguridad)
7. [Instalación](#instalación)
8. [Eventos y Funcionalidad](#eventos-y-funcionalidad)
9. [Próximos Pasos](#próximos-pasos)

---

## 📝 Descripción
Este proyecto simula una **tienda online** donde el usuario puede:
- Navegar entre categorías y productos.
- Ver detalles de cada producto.
- Agregar y eliminar ítems del carrito.
- Completar un formulario de checkout.

**Tecnologías utilizadas:**
- React 19
- React Router DOM 7
- Context API
- Firebase Firestore
- React Spinners para loaders
- Vite como bundler

---

## 🏗 Arquitectura del Proyecto
App
└── BrowserRouter
└── CartContextProvider
├── NavBar
└── Routes
├── ItemListContainer
├── ItemDetailContainer
├── CartContainer
└── CheckOutForm

---

## 🔍 Componentes Principales

### `App.jsx`
- Punto de entrada principal.
- Configura **React Router** y **CartContextProvider**.
- Define las rutas:
  - `/` → `ItemListContainer`
  - `/detail/:idParam` → `ItemDetailContainer`
  - `/category/:catParam` → `ItemListContainer`
  - `/cart` → `CartContainer`

### `NavBar`
- Barra de navegación con links y el `CartWidget`.

### `CartWidget`
- Ícono del carrito con contador dinámico (`countItemsInCart()`).

### `ItemListContainer`
- Lista de productos, con carga desde Firestore.
- Filtra por categoría usando `useParams()`.

### `ItemDetailContainer`
- Muestra detalle del producto seleccionado.
- Obtiene datos con `getProductById()` desde Firestore.

### `ItemCount`
- Controla cantidad de productos a agregar al carrito.
- Usa `addItem()` del contexto.

### `CheckOutForm`
- Formulario para completar datos del usuario.
- Envía datos con `props.handleCheckOut()`.

---

## 🔗 Conexión a Firestore
En la carpeta `data` se encuentra la lógica para interactuar con Firebase:

**Inicialización:**
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY,
  authDomain: import.meta.env.VITE_FS_AUTH,
  projectId: import.meta.env.VITE_FS_PROJECTID,
  storageBucket: import.meta.env.VITE_FS_BUCKET,
  messagingSenderId: "306198768469",
  appId: import.meta.env.VITE_FS_APPID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

Funciones principales:

getData(): Obtiene todos los productos.
getProductById(id): Obtiene producto por ID.
getProductsByCategory(catParam): Filtra por categoría.
createBuyOrder(orderData): Crea orden de compra.
exportProducts(): Exporta productos iniciales a Firestore.

📦 Dependencias:

"dependencies": {
  "firebase": "^12.5.0",
  "ldrs": "^1.1.9",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router": "^7.9.4",
  "react-router-dom": "^7.9.4",
  "react-spinners": "^0.17.0"
}

--Instalación:
npm install

🔐 Variables de Entorno y Seguridad
Para proteger las credenciales de Firebase, se creó un archivo .env en la raíz del proyecto con las siguientes variables:

VITE_FS_APIKEY=tu_api_key
VITE_FS_AUTH=tu_auth_domain
VITE_FS_BUCKET=tu_storage_bucket
VITE_FS_PROJECTID=tu_project_id
VITE_FS_APPID=tu_app_id

Configuración de .gitignore:

# Ocultar variables sensibles
.env

Esto asegura que las credenciales no se expongan en GitHub.

⚙️ Instalación
# Clonar el repositorio
git clone https://github.com/lucasabad99/CarritoConReact.git

# Instalar dependencias
npm install

# Ejecutar el proyecto
npm run dev

▶️ Uso

Accede a http://localhost:5173 (Vite por defecto).
Navega entre categorías y productos.
Agrega ítems al carrito y completa el checkout.


🎯 Eventos y Funcionalidad
La aplicación utiliza eventos en botones y formularios para manejar la interacción del usuario. Estos eventos se gestionan principalmente con funciones como handleSubmit, handleChange y handleCheckOut, que se pasan como props o se definen dentro de los componentes.
Ejemplos:

Formulario de Checkout (CheckOutForm)
onSubmit={handleSubmit}: Captura el evento de envío del formulario.
Dentro de handleSubmit(event):
Se llama event.preventDefault() para evitar el comportamiento por defecto.
Se ejecuta props.handleCheckOut(formData) para enviar los datos del usuario al proceso de compra.

Botones de control de cantidad (ItemCount)
onClick={sumar} y onClick={restar}: Incrementan o decrementan la cantidad seleccionada.
onClick={addToCart}: Agrega el producto al carrito usando el contexto global (addItem()).

Botón de limpiar formulario
onClick={clearForm}: Resetea el estado del formulario a valores vacíos.


Estos eventos permiten que la aplicación sea reactiva y dinámica, actualizando el estado en tiempo real y comunicando datos entre componentes mediante props y Context API.


📌 Autor
Lucas Abad Cancinos
Analista de Sistemas | React Developer

