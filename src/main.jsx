import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './pages/Admin.jsx'
import Form from './pages/Form.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path:'/admin',
    element: <Admin />,
    errorElement: <Error />
  },
  {
    path:'/script/:Id',
    element: <Form />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
