
const divStyle = "w-screen h-screen flex flex-col items-center p-5 md:p-2 gap-5";
const h2Style = "text-2xl";
const ulStyle = "flex flex-col gap-2 p-2 list-disc list-inside";

export default function Home(){

    return(
        <div className={divStyle}>
            <h2 className={h2Style}>Welcome to Subnex!</h2>
            <p>Subnex is a subnet calculator that allows you to easily calculate subnet information for your IPv4 networks.</p>
            <ul className={ulStyle}>
                <li>Calculate network and broadcast addresses</li>
                <li>Determine the number of available host addresses</li>
                <li>Identify the subnet mask in dotted decimal and CIDR notation</li>
                <li>Get wildcard mask</li>
            </ul>
            <p className="font-semibold">To get started, click on the "Calculator" button in the navigation menu.</p>
        </div>
    )
}