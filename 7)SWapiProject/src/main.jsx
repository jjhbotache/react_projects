import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Character from './pages/Character/Character.jsx'

import { GlobalStyles } from './mainCustomStyles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/character/:id",
    element: <Character/>,
  },
  {
    path: "*",
    element: <>
    <h1>Ups, no existe esta ruta</h1>
    <Link to="/">Volver al inicio</Link>
    </>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <GlobalStyles/>
  <RouterProvider router={router} />
  </>,
)
