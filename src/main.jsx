import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './theme/index.jsx';
import App from './App.jsx'

// AUTH0 PROVIDER
import { Auth0Provider } from '@auth0/auth0-react';

// REACT ROUTER PROVIDER
import { BrowserRouter } from 'react-router-dom'

// REACT-AUTH-KIT PROVIDER
// import AuthProvider from 'react-auth-kit'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <React.StrictMode>
          <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>  
          </ThemeProvider>
      </React.StrictMode>
  </Auth0Provider>
)
