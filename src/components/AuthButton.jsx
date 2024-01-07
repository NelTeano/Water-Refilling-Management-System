import { useAuth0 } from "@auth0/auth0-react";
import { Button, useMediaQuery } from '@mui/material';

export default function Authbutton() {

    const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();
    const isMobile = useMediaQuery('(max-width: 899px)');

    const buttonStyle = {
        cursor: 'pointer',
    };

    return (
        <>
            { isAuthenticated ? 
                <Button 
                    variant="contained"
                    size="outlined"
                    style={isMobile ? {display: 'none'} : buttonStyle  }
                    onClick={() => logout()} // ACTIVATE CALLBACK LOGOUT THE ACCOUNT AND REDIRECT
                >
                    Sign Out
                </Button> :
                <Button 
                    variant="outlined"
                    size="large"
                    style={isMobile ? {display: 'none'} : buttonStyle  }
                    onClick={() => loginWithRedirect()} // ACTIVATE CALLBACK LOGIN REDIRECTED TO AUTH0 LOGINPAGE
                >
                    Sign In
                </Button>
            }
        </>
    )
}
