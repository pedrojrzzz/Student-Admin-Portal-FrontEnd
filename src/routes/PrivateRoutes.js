import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
  const isLoggedIn = false; // Isso vai vir do backend

  if (!isLoggedIn) {
    // Verificação se user está logado e se a rota é fechada
    return <Navigate to="/nãoAutenticado" replace />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return isLoggedIn ? children : <Navigate to="/nãoAutenticado" replace />; // Se passar da validação renderize esse element
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Esse PropTypes.node = ele aceita números, strings, elementos React, arrays, fragmentos
