import Navigation from '../Navigation/Navigation';

const divStyle = "w-screen border-b border-gray-400/40 shadow-sm shadow-black/20 pt-2 px-4 flex justify-center items-end ";
const spanStyle = "flex flex-row justify-between w-full md:w-1/2 h-full";
const h1Style = "text-xl md:text-3xl font-semibold";

export default function Header(){

    return(
        <div className={divStyle}>
            <span className={spanStyle}>
                <h1 className={h1Style}>Subnex</h1>
                <Navigation />
            </span>
        </div>
    )
}