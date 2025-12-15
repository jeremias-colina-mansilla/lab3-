import { useState, useEffect } from "react";


export function Auto() {

    const [auto, setAuto] = useState(1)
    const [modelo, setModelo] = useState("fiat 500")



    const handleChange = (e) =>{
        let value = Number(e.target.value)
        if (value > 5) value = 5
        if (value < 1 ) value = 1
        setAuto(value)
    }


    useEffect(()=>{
        if (auto === 1) setModelo("fiat 500")
        else if (auto === 2) setModelo("cronos")
        else if (auto === 3) setModelo("suran")
        else if (auto === 4) setModelo("audi A1")
        else setModelo("ferrari")
    },[auto])


    return(
        <div>
            <h2>tenemos varios modelos de autos selecciona un numero y saldra el nombre del auto</h2>
            <input type="number" value={auto} onChange={handleChange}/>
            <p>modelo del auto: <strong>{modelo}</strong></p>
        </div>
    )
}