import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// PAGES
import HeaderAuth from './components/Auth';
import Home from './pages/HomePage/Home';
import DashboardPage from './pages/DashboardPage';
import LocationPage from './pages/LocationPage';
import OrderPage from './pages/OrderPage';
import RegisterPage from './pages/RegisterPage';
import ReceiptPage from './pages/ReceiptPage';
import OrderStatusPage from './pages/OrderStatusPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

// STYLES
import './App.css';

function App() {
  const location = useLocation();
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    setIsAdminRoute(location.pathname.startsWith('/client-dashboard'));
  }, [location]);

  const routes = [
    {
      pathname: "/",
      element: Home,
    },
    {
      pathname: "/client-dashboard",
      element: DashboardPage,
    },
    {
      pathname: "/client-dashboard/location",
      element: LocationPage,
    },
    {
      pathname: "/client-dashboard/order-status/:status",
      element: OrderStatusPage,
    },
    {
      pathname: "/client-dashboard/order/:orderType",
      element: OrderPage,
    },
    {
      pathname: "/receipt/:orderSummary",
      element: ReceiptPage,
    },
    {
      pathname: "/register",
      element: RegisterPage,
    },
    {
      pathname: "/history",
      element: OrderHistoryPage,
    },
  ];

  return (
    <>
      {isAdminRoute && <HeaderAuth />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.pathname} element={<route.element />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
