import { useLocation, useNavigate } from "react-router-dom";

const ulStyle = "flex flex-row gap-5 m-2 p-3 w-full justify-center border-b border-b-gray-400/50 shadow-sm shadow-black/10";
const buttonStyle = "shadow-sm shadow-black/40 p-1 hover:px-2 hover:border-b-red-600 hover:border-b-2 rounded-sm hover:bg-linear-to-b hover:from-gray-200/10 hover:to-gray-400/25 transition-all duration-150 text-lg";

export default function ModeSelector() {

    const navigate = useNavigate();
    const location = useLocation();

    const getActiveMode = (path: string) => {
        return location.pathname === path ? " border-b-red-600 border-b-2 font-semibold" : " border-b-red-600/0";
    }

    return(
       <ul className={ulStyle}>
        <li>
            <button onClick={() => navigate("/calculator") } className={`${buttonStyle} ${getActiveMode("/calculator")}`}>
                Basic
            </button>
        </li>
        <li>
            <button onClick={() => navigate("/calculator/advanced")} className={`${buttonStyle} ${getActiveMode("/calculator/advanced")}`}>
                Advanced
            </button>
        </li>
       </ul>
    )
}