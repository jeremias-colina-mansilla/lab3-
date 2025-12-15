import { useState, useEffect } from "react";

export function SensorTrafico(){

    const [cantidad, setCantidad] = useState("3")
    const [nivel, setNivel] = useState("bajo")


    const handleChange = (e) =>{
        let value = Number(e.target.value)
        if(value > 20) value= 20
        if(value < 0) value = 0
        setCantidad(value)
    }



    useEffect(()=>{
        if(cantidad <= 5) setNivel("bajo")
        else if (cantidad <=12) setNivel("medio")
        else setNivel("alto")
    },[cantidad])


    return(
        <div>
            <h2>sensor de trafico</h2>
            <input type="number" value={cantidad} onChange={handleChange} />
            <p>el nivel del trafico: <strong>{nivel}</strong></p>
        </div>
    )
}