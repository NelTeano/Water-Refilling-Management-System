import { useAuth0 } from "@auth0/auth0-react";

export default function Authbutton() {

    const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();

    const buttonStyle = {
        backgroundColor: '#ADA7FF',
        color: 'white',
        borderRadius: '999px',
        padding: '16px 32px',
        _hover: {
            backgroundColor: '#8984c7',
            color: 'white',
            transition: '0.7s'
        },
    };

    return (
        <>
            { isAuthenticated ? 
                <button 
                    style={buttonStyle}
                    onClick={() => logout()} // ACTIVATE CALLBACK LOGOUT THE ACCOUNT AND REDIRECT
                >
                    Sign Out
                </button> :
                <button 
                    style={buttonStyle}
                    onClick={() => loginWithRedirect()} // ACTIVATE CALLBACK LOGIN REDIRECTED TO AUTH0 LOGINPAGE
                >
                    Sign In
                </button>
            }
        </>
    )
}
