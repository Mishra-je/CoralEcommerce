import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import SinglePage from './pages/Home/SinglePage.jsx'
import Login from './pages/Home/Login.jsx'
import Register from './pages/Home/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path: "/",
        element :<Home/>
      },
      {
        path: "/shop/:id",
        element:<SinglePage/>
      },
      {
        path:"/account",
        element:<Login/>
      },{
        path:"/account/register",
        element:<Register/>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
              