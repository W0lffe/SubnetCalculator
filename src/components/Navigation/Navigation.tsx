import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navigation(){

    const navigateTo = useNavigate();
    const [isActive, setIsActive] = useState("/");

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        //console.log(value)
        setIsActive(value);
        navigateTo(value);
    }

    return(
        <div>
            <button value="/" onClick={(e) => handleClick(e)}>Home</button>
            <button value="/app" onClick={(e) => handleClick(e)}>App</button>
        </div>
    )
}