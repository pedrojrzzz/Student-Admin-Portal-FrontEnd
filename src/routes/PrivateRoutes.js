/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { fetchRequest } from '../slices/testeSlice';
/* eslint-disable */

export default function PrivateRoute({ children }) {
  console.log('PrivateRoute rendered');
  const dispatch = useDispatch()
  const { data, error, loading } = useSelector((state) => state.teste);
  const isLoggedIn = true; // Isso vai vir do backend
  const fetchWasMade = useRef(false)

  const cookie = new Cookies(null, { path: '/' });
  const token = cookie.get('tokenUser')
  const theToken = 'Bearer ' + token


const handleDispatch = () => {
  if (!fetchWasMade.current) {
    dispatch(fetchRequest(theToken))
    fetchWasMade.current = true;
  }
  
}

if (!fetchWasMade.current) {
  handleDispatch()
}

if (loading) {
  console.log('oi')
  console.log('Espere um pouco cidadão')
}

if (fetchWasMade.current && error) {
  return <Navigate to="/error" replace />
}

if (!loading && data.length < 1) {
  console.log(data)
  return <Navigate to="/stopBitch" replace />
}
  

  return (
    children
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Esse PropTypes.node = ele aceita números, strings, elementos React, arrays, fragmentos
