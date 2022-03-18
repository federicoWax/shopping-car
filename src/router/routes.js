import React from 'react';
import Home from '../views/Home';
import Login from '../views/Login';
import PurchaseDetail from '../views/PurchaseDetail';

export default [
  {
    key: 'home',
    path: '/',
    element: <Home />,
    index: true
  },
  {
    key: 'login',
    path: '/login',
    element: <Login />,
    index: true
  },
  {
    key: 'purchase-detail',
    path: '/detalle-compra',
    element: <PurchaseDetail />,
    index: true
  }
];