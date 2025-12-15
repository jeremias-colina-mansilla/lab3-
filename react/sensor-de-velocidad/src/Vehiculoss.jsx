import { useState, useEffect } from "react";

export function Vehiculoss(){
    const [Vehiculos, setVehiculos] = useState(1)
    const [estado, setEstado] = useState("bajo")


    const aumentar =()=>{
        setVehiculos(v => (v <15 ? v + 1: 15))
    }
    const disminuir =() =>{
        setVehiculos(v =>(v >1 ? v -1: 1))
    }


    useEffect(()=>{
        if(Vehiculos <5) setEstado("bajo")
        else if (Vehiculos <=10) setEstado("normal")
        else setEstado("alto")
    },[Vehiculos])


    return(
        <div>
            <h2>cuantos Vehiculos tenes</h2>
            <button onClick={disminuir}>-</button>
            <span>{Vehiculos}</span>
            <button onClick={aumentar}>+</button>
            <p>cantidad de Vehiculos: <strong>{estado}</strong></p>
        </div>
    )
}