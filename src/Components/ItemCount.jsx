import { useEffect, useState } from "react";
function ItemCount(){
    
let [count, setCount] = useState(1)
let [limit, setlimit] = useState(false)
let maxValue = 10;

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
return(
        <div>
            <button onClick={ restar}>-</button>
            <p>{ count }</p>
            <button onClick={sumar}>+</button>

            {limit ? <p>Alcanzaste el limite amigo</p> : <></>}
                               </div>
    )
}

export default ItemCount;