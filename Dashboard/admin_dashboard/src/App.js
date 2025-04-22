import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import './App.css';
import React from 'react';
import { LoaderProvider } from './hooks/LoaderContext';
import Loader from './components/Loader/Loader';
import { UserProvider } from './hooks/userContext';
import { ToastProvider } from './hooks/ToastContext'
function App() {
  return (
    <UserProvider>
      <LoaderProvider>
        <Loader />
        <React.StrictMode>
          <RouterProvider router={Router} />
        </React.StrictMode>
      </LoaderProvider>
    </UserProvider>
  );
}

export default App;
