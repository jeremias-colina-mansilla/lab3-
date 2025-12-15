import { useState, useEffect } from "react";

export function Marchas() {

    const [marcha, setMarcha] = useState(1)
    const [estado, setEstado] = useState("lenta")


    const aumentar = () =>{
        setMarcha(m => (m < 5 ? m + 1: 5))
    }
    const disminuir = () =>{
        setMarcha(m => (m > 1? m -1: 1 ))
    }

    useEffect(()=>{
        if(marcha <=2) setEstado("lenta")
        else if (marcha === 3) setEstado("normal")
        else setEstado("rapida")
    },[marcha])

    return(
        <div>
            <h2>Marchas</h2>
            <button onClick={disminuir}>-</button>
            <span>{marcha}</span>
            <button onClick={aumentar}>+</button>
            <p>nivel de marcha; <strong>{estado}</strong></p>
        </div>
    )
}