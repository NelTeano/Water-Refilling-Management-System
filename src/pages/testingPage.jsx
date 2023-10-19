import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

// IMAGES
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

// STYLES
import '../App.css'

// COMPONENTS 
import Authbutton from '../components/client/AuthButton'

// ROUTER DOM
import { Link } from 'react-router-dom';

export default function TestingPage() {

    const [count, setCount] = useState(0);
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
        <div>
            <Link href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </Link>
            <Link href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </Link>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more<br></br>
            Test Login <Authbutton />
            {isAuthenticated &&
                <>
                <p>{user.email}</p><br></br>
                <p>{user.name}</p><br></br>
                <p>{user.given_name}</p><br></br>
                <p>{user.phone_number}</p><br></br>
                <p>{user.birthdate}</p><br></br>
                </>
            }
        </p>
        </>
    )
}
