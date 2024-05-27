export default function Button({children, isSelected , onClick}){
    return(
        <div>
            <button className={isSelected ? "active" :"active2" } onClick={onClick}> {children} </button>
        </div>
    )
}