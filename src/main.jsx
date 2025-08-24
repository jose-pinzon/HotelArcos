import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router";
import { Admin } from './Admin/layout/Admin.jsx';
import routesAdmin from './Admin/router/router.jsx';
import { Login } from './Admin/views/Login.jsx';


  function checkAuth() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  // Loader protegido
  async function protectedLoader() {
    const auth = checkAuth();

    if (!auth) {
      throw redirect("/login");
    }
    return null; // Devuelve datos si quieres
  }


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path: "admin",
    element: <Admin/>,
    children: routesAdmin,
    loader:protectedLoader,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
