import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { fetchRequest } from '../redux/slices/checkAuthorizationSlice';
import { logado } from '../redux/slices/userIsLoggedInSlice';

export default function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    (state) => state.checkAuthorization,
  );

  const [tokenIsValid, setTokenIsValid] = useState(null);

  const cookie = new Cookies(null, { path: '/' });
  const token = cookie.get('tokenUser');
  const theToken = `Bearer ${token}`;

  useEffect(() => {
    // Faz a chamada da API
    if (theToken) {
      dispatch(fetchRequest(theToken));
    } else {
      setTokenIsValid(false);
    }
  }, [dispatch, theToken]);

  useEffect(() => {
    //
    if (data.length > 0) {
      setTokenIsValid(true);
      dispatch(logado());
    } else {
      setTokenIsValid(false);
    }
  }, [data, dispatch]);

  if (loading || tokenIsValid === null) {
    return <div>Loading...</div>;
  }

  if (tokenIsValid === false && error) {
    return <Navigate to="/error" replace />;
  }

  if (data.length < 1) {
    return <Navigate to="/404" replace />;
  }

  dispatch(logado()); // Definindo state que user está logado

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
