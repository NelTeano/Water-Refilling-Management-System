import { Route, Routes } from 'react-router-dom'

// PAGES
import TestingPage from './pages/testingPage'
import { Index } from './pages/client/Index';
import { Dashboard } from './pages/client/Dashboard';
import { Header } from './components/client/Header';

function App() {

  // SET UP THE PAGES ROUTES
    const routes = [
      {
        pathname: "/",
        element: Index
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
      </>
    )
}

export default App
