import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <footer>
            <div>
                <div><h1>Hydro<span>Maze</span></h1></div>
                <div>
                    <div><Link>About Us</Link></div>
                    <div><Link>Contact Us</Link></div>
                    <div><Link>Privacy Policy</Link></div>
                    <div><Link>Terms of Service</Link></div>
                </div>
            </div>
            <hr />
            <p>©2023 HydroMaze. All rights reserved</p>
        </footer>
    )
}