
export function EntradaVehiculos({cantidad, setCantidad}){
    

    const handleChange= (e) =>{
        let value = Number(e.target.value)
        if(value > 20) value = 20
        if(value < 0) value= 0
        setCantidad(value)
    }

    return(
        <div>
            <h2>Vehiculos Detectados</h2>

            <input tsype="number" value={cantidad} onChange={handleChange}/>
        </div>
    )
}