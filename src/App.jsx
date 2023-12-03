import { Route, Routes } from 'react-router-dom'

// PAGES
import HeaderAuth from './components/Auth'
import Home from './pages/Home'
import DashboardPage from './pages/DashboardPage';
import LocationPage from './pages/LocationPage';

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
        element: DashboardPage,
        // children: [
        //   {
        //     pathname: "/location",
        //     element: LocationPage
        //   },
        // ]
      },
      {
        pathname: "/client-dashboard/location",
        element: LocationPage
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
