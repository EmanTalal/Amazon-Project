import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Checkout from './component/CheckOut';
import Login from './pages/Login';
import Sinup from './pages/Sinup';

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <App />,
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/ProductPage/:id',
    element: <ProductPage />,
  },
  {
    path: '/Cart',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/Sinup',
    element: <Sinup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
