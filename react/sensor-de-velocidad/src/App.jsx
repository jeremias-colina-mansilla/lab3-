import { Auto } from "./Auto";
import { Marchas } from "./Marchas";
import { SensorTrafico } from "./SensorTrafico";
import { Vehiculoss } from "./Vehiculoss";
import { Velocidad } from "./velocidad";

export default function App(){
  return(
    <div>
      <h2>sensor de volocidad y autos</h2>
      <SensorTrafico/>
      <br></br>
      <Velocidad/>
      <Marchas/>
      <Auto/>
      <Vehiculoss/>

    </div>
  )
}