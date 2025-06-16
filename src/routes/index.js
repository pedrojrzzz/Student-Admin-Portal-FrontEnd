import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import CheckAuth from './CheckAuth';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Page404 from '../pages/Page404/page404';
import PanelAlunos from '../pages/PanelAlunos/PanelAlunos';

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <CheckAuth>
            <Login />
          </CheckAuth>
        }
      />

      <Route
        exact
        path="/register"
        element={
          <CheckAuth>
            <Register />
          </CheckAuth>
        }
      />

      <Route path="*" element={<Page404 />} />

      <Route
        exact
        path="/portal-alunos"
        element={
          <PrivateRoute>
            <PanelAlunos />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
