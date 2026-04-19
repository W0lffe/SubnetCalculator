import ModeSelector from '../components/ModeSelector/ModeSelector';
import { Outlet } from "react-router-dom";

const divStyle = 'w-screen md:w-1/2 h-fit md:h-screen flex flex-col items-center p-2 md:gap-5';

export default function Calculator() {

     return (
        <div className={divStyle}>
            <ModeSelector />
            <Outlet />
        </div>
    )

}