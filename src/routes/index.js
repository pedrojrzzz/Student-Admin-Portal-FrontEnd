import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

import Login from '../pages/Login/login';
import Page404 from '../pages/Page404/page404';
import Contador from '../components/Contador/Contador';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/contador" element={<Contador />} />
      <Route
        exact
        path="/teste"
        element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
