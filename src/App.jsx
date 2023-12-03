import { Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import Dashboard from './pages/DashboardPage';
import HeaderAuth from './components/Auth'

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
        {!isAdminRoute && <HeaderAuth />}
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.pathname} element={<route.element />} />
            ))}
          </Routes>
      </>
    )
}

export default App
