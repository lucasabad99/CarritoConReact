import { useEffect, useState } from "react"

export default function CheckOutForm(){

    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            phone: ""
        }
    );

    function handlESubmit(event){
        console.log(event);
        event.preventDefaul();
       // const formElement = event.target;
        //onsole.log(formElement)
    }

    function handleChange(event){
        console.log(event.target)
        const inputName = event.target.name;
        const value = event.target.value;

        const newFormData = {...formData};
        newFormData[inputName] = value;
        setFormData(newFormData);
    }

    function clearForm(){
        setFormData({
            username: "",
            email: "",
            phone: ""
        })
    }

    return( 
    <form onSubmit={handlESubmit}>
    <h4>ingresa tus datos personales</h4>
    <div>
        <label>Nombre     
            <input value={formData.username} onChange={handleChange} name="username" required type="text" placeholder="Nombre"></input>
        </label>
        <label>Email     
            <input value={formData.email} onChange={handleChange} name="email" required type="email"placeholder="Email"></input>
        </label>
        <label>Telefono 
            <input value={formData.phone} onChange={handleChange} name="phone" type="tel" placeholder="1155838452"></input>
        </label>
    </div>
    <button type= "submit">Confirmar</button>
    <button onClick={clearForm} type="button">Limpiar formulario</button>
    </form>)
   
}