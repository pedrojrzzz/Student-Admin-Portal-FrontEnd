import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Page404 from '../pages/Page404/page404';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
      <Route
        exact
        path="/teste"
        element={
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
