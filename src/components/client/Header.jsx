import '../../styles/client/index.css'
import '../../styles/client/header.css'
import Authbutton from './AuthButton'


export const Header = () => {
    return(
        <div className='header'>
            <div>
                <h1>Hydro<span>Maze</span></h1>
                <Authbutton />
            </div>
        </div>
    )
}