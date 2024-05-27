import Button from "./Button"
export default function Navbuttons({handle,first}){
    return(
        <div className="pl-4 flex justify-start items-center gap-6 h-20 bg-slate-600 w-full" >
        <Button   isSelected={first === "Reactjs"} onClick={() =>handle("Reactjs") } >React_js</Button>
        <Button  isSelected={first === "Component"}  onClick={() => handle("Component") } >Component</Button>
        <Button   isSelected={first === "Props"} onClick={() => handle ("Props") } >Props</Button>
        <Button  isSelected={first === "UseState"} onClick={() => handle ("UseState") } >UseState</Button>
      </div>
    )
}