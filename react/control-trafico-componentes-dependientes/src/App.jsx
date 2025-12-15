import { useState, useEffect } from "react";
import { EntradaVehiculos } from "./EntradaVehiculos";
import { EstadoTrafico } from "./EstadoTrafico";

export default function App(){
  const [cantidad, setCantidad] = useState(0)
  const [nivel, setNivel] = useState("bajo")


  useEffect(()=>{
    if(cantidad <=5) setNivel("bajo")
    else if (cantidad <=12) setNivel("medio")
    else setNivel("alto")
  },[cantidad])


  return(
    <div>
      <h2>control de trafico</h2>
      <EntradaVehiculos
        cantidad={cantidad}
        setCantidad={setCantidad}/>
      <EstadoTrafico
        nivel={nivel}/>


    
    </div>
  )
}