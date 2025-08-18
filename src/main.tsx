import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/Landing'
import RoleSelect from './pages/RoleSelect'

const router = createBrowserRouter([{
  element: <MainLayout />,
  path: '/',
  children: [
    {
      element: <Landing />,
      path: '/:role'
    },
    {
      element: <RoleSelect />,
      path: '/choose-role'
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
