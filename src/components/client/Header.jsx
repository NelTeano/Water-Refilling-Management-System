import '../../styles/client/header.css'
import Authbutton from './AuthButton'
import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <div className='header'>
            <div>
                <Link to='/'><h1>Hydro<span>Maze</span></h1></Link>
                <Authbutton />
            </div>
        </div>
    )
}