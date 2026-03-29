import Navigation from '../Navigation/Navigation';

export default function Header(){
    return(
        <div className='flex flex-row '>
            <h1>Subnex</h1>
            <Navigation />
        </div>
    )
}