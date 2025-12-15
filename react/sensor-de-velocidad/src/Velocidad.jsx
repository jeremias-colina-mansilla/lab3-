import { useState, useEffect } from "react";


export function Velocidad() {
    const [velocidad, setVelocidad] = useState(0)
    const [estado, setEstado] = useState("lento")

    const aumentar = () =>{
        setVelocidad(v => v +10)
    }

    const disminuir = ()=>{
        setVelocidad(v =>(v > 0 ? v -10 : 0))
    }


    useEffect(()=>{
        if (velocidad < 40) setEstado("lento")
        else if (velocidad <=80) setEstado("medio")
        else setEstado("rapido")
    },[velocidad])


    return(
        <div>
            <h2>Sensor de velocidad</h2>
            <button onClick={disminuir}>-</button>
            <span>{velocidad}</span>
            <button onClick={aumentar}>+</button>
            <p>nivel de velocidad: <strong>{estado}</strong></p>
        </div>
    )
}