import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Admin } from './Admin/layout/Admin.jsx';
import routesAdmin from './Admin/router/router.jsx';


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "admin",
    element: <Admin/>,
    children: routesAdmin
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
