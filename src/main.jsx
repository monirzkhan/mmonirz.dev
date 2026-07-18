import { StrictMode } from 'react'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import ProjectDetails from './Components/Projects/ProjectDetails.jsx'


const router = createBrowserRouter([
  

  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:'project/:id',
        element: <ProjectDetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
