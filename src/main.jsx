import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Home/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
