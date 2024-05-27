import MainData from "./MainData"
export default function Renderingdata({first}){
    return(
        <div>
        {!first ? <p className="text-center p-44 font-bold text-4xl"> Please  select a topic</p> :
        <div>
            <MainData first={first} />
         </div>
        }
      </div>
    )
}