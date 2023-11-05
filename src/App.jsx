import { Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/client/Home';
import { Dashboard } from './pages/client/Dashboard';
import { Header } from './components/client/Header';
import { Footer } from './components/client/Footer';

// STYLES
import './App.css'


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
    ];
    
    return(
      <>
        <Header />
        <Routes>
          {routes.map((route, index) => (
          <Route key={index} path={route.pathname} element={<route.element />} />
          ))}
        </Routes>
        <Footer />
      </>
    )
}

export default App
