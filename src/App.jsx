
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider'

import About from './pages/About';
import Root from './layout/Root';
import Home from './pages/Home';



const router = createBrowserRouter([
  {
    element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
        path: "/about",
        element: <About/>
      },
      {
        
      }
    ],
  }
]);

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        {/* <Home/> */}
      </ThemeProvider>
    </>
  )
}

export default App
