import { Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/client/Home';
import { Dashboard } from './pages/client/Dashboard';
import { Header } from './components/client/Header';
import { Footer } from './components/client/Footer';
import { Login } from './pages/admin/Login';

// STYLES
import './App.css'
import { Index } from './pages/admin/Dashboard/Index';


function App() {

  // SET UP THE PAGES ROUTES
    const routes = [
      {
        pathname: "/",
        element: Home
      },
      {
        pathname: "/client-dashboard",
        element: Dashboard
      },
      {
        pathname: "/admin",
        element: Login
      },
      {
        pathname: "/admin/dashboard",
        element: Index
      },
    ];

    const isAdminRoute = location.pathname.startsWith('/admin');
    
    return(
      <>
        {!isAdminRoute && <Header />}
        <Routes>
          {routes.map((route, index) => (
          <Route key={index} path={route.pathname} element={<route.element />} />
          ))}
        </Routes>
        {!isAdminRoute && <Footer />}
      </>
    )
}

export default App
