import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import ProductsDetail from './components/ProductsDetail/ProductsDetail';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: ()=> fetch('./categories.json'),
       
      },
      {
        path: 'products/:productId',
        element: <ProductsDetail></ProductsDetail>,
        loader: () => fetch ('/productData.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch ('/productData.json')

      },
    
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </StrictMode>,
)
