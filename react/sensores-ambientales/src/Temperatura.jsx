import { useState, useEffect } from "react";

export function Temperatura(){
    const [temp, setTemp] = useState(20)
    const [estadoTermico, setEstadoTermico] = useState("confortable")

    const handleChange = (e) =>{
        let value = Number(e.target.value)
        if(value >50) value = 50
        if(value < -10) value = -10
        setTemp(value)
    }

    useEffect(()=>{
        if(temp < 15) setEstadoTermico("frio")
        else if (temp <= 25) setEstadoTermico("confortable")
        else setEstadoTermico("caluroso")
    },[temp])

    return(
        <div>
            <h2>sensores de temperatura</h2>
            <input type="number" value={temp} onChange={handleChange} />
            <p>estadoTermico: <strong>{estadoTermico}</strong></p>
        </div>
    )
}