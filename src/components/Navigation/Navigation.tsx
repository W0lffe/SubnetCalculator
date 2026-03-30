import { useNavigate } from "react-router-dom";
import { useState } from "react";

const buttonStyle = "p-0 hover:px-2 hover:border-b-red-600 hover:border-b-2 rounded-[4px] hover:bg-linear-to-b hover:from-gray-200/10 hover:to-gray-400/25 transition-all duration-300 text-lg";
const divStyle = "flex flex-row gap-3 h-full";

export default function Navigation(){

    const navigateTo = useNavigate();
    const [isActive, setIsActive] = useState("/");

    const getActiveButton = (path: string) => {
        return isActive === path ? " border-b-red-600 border-b-2 font-semibold" : " border-b-red-600/0";
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        //console.log(value)
        setIsActive(value);
        navigateTo(value);
    }

    return(
        <div className={divStyle}>
            <button value="/" onClick={(e) => handleClick(e)} className={`${buttonStyle} ${getActiveButton("/")}`}>Home</button>
            <button value="/calc" onClick={(e) => handleClick(e)} className={`${buttonStyle} ${getActiveButton("/calc")}`}>Calculator</button>
        </div>
    )
}