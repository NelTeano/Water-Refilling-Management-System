import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";
export default function Authbutton() {

    const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();
    const isMobile = useMediaQuery('(max-width: 899px)');

    const buttonStyle = {
        backgroundColor: '#34ACAC',
        color: 'white',
        borderRadius: '30px',
        padding: '0 40px',
        fontSize: '15px',
        height: '40px',
        border: 'none',
        cursor: 'pointer',
        _hover: {
            backgroundColor: '#8984c7',
            color: 'white',
            transition: '0.7s',
        },
    };

    return (
        <>
            { isAuthenticated ? 
            <Link to={'/client-dashboard'}>
                <button 
                    style={isMobile ? {display: 'none'} : buttonStyle  }
                >
                    Go to Dashboard
                </button>
            </Link>
                :
                <button 
                    style={isMobile ? {display: 'none'} : buttonStyle  }
                    onClick={() => loginWithRedirect()} // ACTIVATE CALLBACK LOGIN REDIRECTED TO AUTH0 LOGINPAGE
                >
                    Sign In
                </button>
            }
        </>
    )
}
