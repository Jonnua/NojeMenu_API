import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './Container/App.tsx';
import './index.css';
import store from './Storage/Redux/store.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render (
  <Provider store={store}>  
<BrowserRouter>
<ToastContainer />
  <App />
</BrowserRouter>
</Provider>
);


