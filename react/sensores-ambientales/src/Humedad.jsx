import { useState, useEffect } from "react";

export function Humedad() {
    const [humedad, setHumedad] = useState(50)
    const [nievel, setNivel] = useState("adecuada")


    const aumentar = () =>{
        setHumedad(h =>(h < 100 ? h + 1: 100))
    }
    const disminuir = () => {
        setHumedad(h =>(h > 0 ? h - 1: 0))
    }

    useEffect(()=>{
        if(humedad < 30) setNivel("baja")
        else if (humedad <= 60) setNivel("adecuada")
        else setNivel("alta")
    },[humedad])


    return(
        <div>
            <h2>sensores de humedad</h2>
            <button onClick={disminuir}>-</button>
            <span>{humedad}</span>
            <button onClick={aumentar}>+</button>
            <p>nievel de humedad: <strong>{nievel}</strong></p>
        </div>
    )
}