import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layout/AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

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
