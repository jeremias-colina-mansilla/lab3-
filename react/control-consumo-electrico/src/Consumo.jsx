// componente dependiente 

export function Consumo({consumo, nivel, onSumar, onRestar}){
    return(
        <div>
            <h2>consumo electronico</h2>

            <button onClick={onRestar}>-</button>
            <span>{consumo}</span>
            <button onClick={onSumar}>+</button>
            <p>nivel de consumo: <strong>{nivel}</strong></p>
        </div>
    )
}