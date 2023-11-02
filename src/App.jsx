import { Route, Routes } from 'react-router-dom'

// PAGES
import TestingPage from './pages/testingPage'
import { Login } from './pages/client/Login';

function App() {

  // SET UP THE PAGES ROUTES
    const routes = [
      {
        pathname: "/",
        element: TestingPage
      },
    ];
    
    return(
      <>
        <Routes>
          {routes.map((route, index) => (
          <Route key={index} path={route.pathname} element={<route.element />} />
          ))}
        </Routes>
      </>
    )
}

export default App
