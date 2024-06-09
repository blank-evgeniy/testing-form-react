import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Intro from './components/Intro';
import Testing from "./components/Testing"
import ErrorPage from "./components/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Intro/>},
      {
        path: "/test-form",
        element: <Testing/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
