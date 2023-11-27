import { Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import Dashboard from './pages/DashboardPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// STYLES
import './App.css'

function App() {

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

    const isAdminRoute = location.pathname.startsWith('/admin');
    const isProtectedRoute = location.pathname.startsWith('/admin/dashboard');

    return(
      <>
        {/* {!isAdminRoute && <Header />} */}
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.pathname} element={<route.element />} />
            ))}
          </Routes>
        {/* {!isAdminRoute && <Footer />} */}
      </>
    )
}

export default App
