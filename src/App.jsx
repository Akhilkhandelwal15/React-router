import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layout/AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { ErrorPage } from './pages/ErrorPage';
import { getAPIData, getMovieDetails } from './api/ApiData';
import { UserDetail } from './pages/UserDetail';

function App() {

  // direct way

  // const router = createBrowserRouter([
  //   {
  //         path: "/",
  //         element: <Home />
  //       },
  //       {
  //         path: "/about",
  //         element: <About />
  //       },
  //       {
  //         path: "/contact",
  //         element: <Contact />
  //       }
  // ]);


  // using outlet (inside some layout or component)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          loader: getAPIData,
        },
        {
          path: "/movie/:id",
          element: <UserDetail />,
          loader: getMovieDetails
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
