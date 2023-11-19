import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
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
    element: <h1>Hola, no existe esta ruta</h1>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <GlobalStyles/>
  <RouterProvider router={router} />
  </>,
)
