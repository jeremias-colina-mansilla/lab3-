import { Humedad } from "./Humedad"
import { Temperatura } from "./Temperatura"


export default function App() {
return (
<div style={{ padding: "20px", fontFamily: "Arial" }}>
<h1>Sensores Ambientales</h1>
<Temperatura />
<Humedad />
</div>
);
}