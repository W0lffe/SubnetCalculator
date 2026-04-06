import { useLocation, useNavigate } from "react-router-dom";

const buttonStyle = "hover:px-2 hover:border-b-red-600 hover:border-b-2 rounded-sm hover:bg-linear-to-b hover:from-gray-200/10 hover:to-gray-400/25 transition-all duration-300 text-lg";
const divStyle = "flex flex-row gap-3 h-full";

export default function Navigation() {

    const navigateTo = useNavigate();
    const location = useLocation();

    const getActiveButton = (path: string) => {
        if (path === "/") {
            return location.pathname === "/"
                ? " border-b-red-600 border-b-2 font-semibold"
                : " border-b-red-600/0";
        }
        return location.pathname.startsWith(path)
            ? " border-b-red-600 border-b-2 font-semibold"
            : " border-b-red-600/0";
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        //console.log(value)
        navigateTo(value);
    }

    return (
        <div className={divStyle}>
            <button value="/" onClick={(e) => handleClick(e)} className={`${buttonStyle} ${getActiveButton("/")}`}>Home</button>
            <button value="/calculator" onClick={(e) => handleClick(e)} className={`${buttonStyle} ${getActiveButton("/calculator")}`}>Calculator</button>
        </div>
    )
}