import { Data } from "../Data"

export default function MainData({first}){
    return(
    <>
        <p className="text-center pt-4 font-mono text-3xl"> {Data[first].heading} </p>
        <p className="p-5 font-sans font-semibold text-xl ">About :-</p>
        <p className=" flex flex-wrap w-[90%] ml-16 font-medium text-lg overflow-hidden "> {Data[first].about} </p>
    </>
    )
}