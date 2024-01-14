import { useAuth0 } from "@auth0/auth0-react";
import { Button, useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";
export default function Authbutton() {

    const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();
    const isMobile = useMediaQuery('(max-width: 899px)');

    const buttonStyle = {
        cursor: 'pointer',
    };

    return (
        <>
            { isAuthenticated ? 
            <Link to={'/client-dashboard'}>
                <Button 
                    style={isMobile ? {display: 'none'} : buttonStyle  }
                    variant="outlined"
                >
                    Go to Dashboard
                </Button>
            </Link>
                :
                <Button 
                    style={isMobile ? {display: 'none'} : buttonStyle  }
                    variant="outlined"
                    onClick={() => loginWithRedirect()} // ACTIVATE CALLBACK LOGIN REDIRECTED TO AUTH0 LOGINPAGE
                >
                    Sign In
                </Button>
            }
        </>
    )
}
