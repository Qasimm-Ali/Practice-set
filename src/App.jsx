import React from "react";
import Navbuttons from "./Components/Buttons";
import { useState } from "react";
import Renderingdata from "./Components/Renderingdata";

function App(){
  const [first, setfirst] = useState("")
  const handle = (paramerter) =>{
    setfirst(paramerter)
  }
  return(
    <div>
      <Navbuttons handle={handle} first={first}/>
      <Renderingdata first={first} />
      </div>
  )
}

export default App;