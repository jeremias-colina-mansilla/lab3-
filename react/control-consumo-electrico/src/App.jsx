import { useState, useEffect } from "react";
import { Consumo } from "./Consumo"

export default function App() {
  const [consumo, setConsumo] = useState(0);
  const [nivel, setNivel] = useState("bajo");

  const sumar = () => {
    setConsumo(c => (c <300? c + 10: 300));
  };

  const restar = () => {
    setConsumo(c => (c > 0 ? c - 10 : 0));
  };

  useEffect(() => {
    if (consumo < 100) setNivel("bajo");
    else if (consumo <= 300) setNivel("medio");
    else setNivel("alto");
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
