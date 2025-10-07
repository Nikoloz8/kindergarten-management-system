import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/Landing'
import RoleSelect from './pages/RoleSelect'
import Register from './pages/Register'
import Login from './pages/Login'
import Children from './pages/Children'
import Staff from './pages/Staff'
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import TeacherRegistration from './pages/TeacherRegistration'

const router = createBrowserRouter([{
  element: <MainLayout />,
  path: '/',
  children: [
    {
      element: <Landing />,
      path: '/'
    },
    {
      element: <RoleSelect />,
      path: '/choose-role'
    },
    {
      element: <Register />,
      path: "/register/:role"
    },
    {
      element: <Login />,
      path: "/login"
    },
    {
      element: <Children />,
      path: '/children'
    },
    {
      element: <Staff />,
      path: '/staff'
    },
    {
      element: <Activities />,
      path: '/activities'
    },
    {
      element: <Calendar />,
      path: '/calendar'
    },
    {
      element: <Calendar />,
      path: '/calendar'
    },
    {
      element: <Settings />,
      path: '/settings'
    },
    {
      element: <Messages />,
      path: "/messages"
    },
    {
      element: <Profile />,
      path: "/profile"
    },
    {
      element: <TeacherRegistration />,
      path: "/teacher-registration"
    }
  ]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
