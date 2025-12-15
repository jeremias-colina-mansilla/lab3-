import { useState, useEffect } from "react";
import { Consumo } from "./Consumo"

export default function App() {
  const [consumo, setConsumo] = useState(0);
  const [nivel, setNivel] = useState("lento");

  const sumar = () => {
    setConsumo(c => (c <120? c + 5: 120));
  };

  const restar = () => {
    setConsumo(c => (c > 0 ? c - 10 : 0));
  };

  useEffect(() => {
    if (consumo < 30) setNivel("lento");
    else if (consumo <= 80) setNivel("medio");
    else setNivel("rapido");
  }, [consumo]);

  return (
    <div>
      <Consumo
        consumo={consumo}
        nivel={nivel}
        onSumar={sumar}
        onRestar={restar}
      />
    </div>
  );
}
