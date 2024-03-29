import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Todo from './components/Todo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "signup",
        element: <Signup />
      },
      
      {
        path: "login",
        element: <Login />,

      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "todo",
        element: <Todo />,
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
