import { useContext, useEffect, useState } from "react";
import  cartContext  from "../context/cartContext";

function ItemCount({product}){
    
const [count, setCount] = useState(1)
const [limit, setlimit] = useState(false)
const maxValue = 10;

const {addItem} = useContext(cartContext)

console.log("Renderizando mi ItemCount")
//console.log("Consultando a la db... !")

//Tarea de montaje
useEffect (() => {console.log(":) consultando base de datos.... !")}, [limit])

function sumar(){


    if(count < maxValue){
    setCount( count+1 )
    } else {
        setlimit(true)
    }
}

function restar(){
    if(count > 0)
setCount( count-1 )
}

function addToCart(){
    addItem({...product, quantity: count })
}
return(
        <div>
            <div style={ { display: "flex", gap:"10px", justifyContent: "center"}} id= "counter-button">
                <button onClick={ restar}>-</button>
                <p>{ count }</p>
                <button onClick={sumar}>+</button>
            </div>
            

            {limit ? <p>Alcanzaste el limite amigo</p> : <></>}
           <button onClick={addToCart} style={{ marginTop: "10px" }}>Agregar Producto</button>
                               </div>
    )
}

export default ItemCount;