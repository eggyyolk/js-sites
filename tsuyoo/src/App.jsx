import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Cards from './pages/Cards';
import Landing from './pages/Landing';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Cards', element: <Cards /> },
{ path: '/Landing', element: <Landing /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}