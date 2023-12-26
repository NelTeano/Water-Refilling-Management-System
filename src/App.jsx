import { Route, Routes } from 'react-router-dom'

// PAGES
import HeaderAuth from './components/Auth'
import Home from './pages/Home'
import DashboardPage from './pages/DashboardPage';
import LocationPage from './pages/LocationPage';
import OrderPage from './pages/OrderPage';
import RegisterPage from './pages/RegisterPage';
import ReceiptPage from './pages/ReceiptPage';

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
        element: DashboardPage
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
      {
        pathname: "/client-dashboard/order/:orderType",
        element: OrderPage
      },
      {
        pathname: "/receipt",
        element: ReceiptPage
      },
      {
        pathname: "/register",
        element: RegisterPage
      },
      
    ];

    const isAdminRoute = location.pathname.startsWith('/client-dashboard');
    // const isProtectedRoute = location.pathname.startsWith('/admin/dashboard');

    return(
      <>
        {isAdminRoute && <HeaderAuth />}
          <Routes>
          {routes.map((route, index)=> (
            <Route key={index} path={route.pathname} element={<route.element />} />
          ))}
        </Routes>
      </>
    )
}

export default App
