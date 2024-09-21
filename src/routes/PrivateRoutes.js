/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { fetchRequest } from '../slices/testeSlice';
import { logado } from '../slices/userIsLoggedInSlice';
/* eslint-disable */

export default function PrivateRoute({ children }) {
  const dispatch = useDispatch()
  const { data, error, loading } = useSelector((state) => state.teste);
  const { dataUser } = useSelector((state) => state.infoUser) 

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
  console.log('loading privateRoute')

}

if (fetchWasMade.current && error) {
  return <Navigate to="/error" replace />
}

  if (!loading && data.length < 1) {
    return <Navigate to="/404" replace />
  }

dispatch(logado()) // Definindo state que user está logado
  
console.log(dataUser)
  return (
    children
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Esse PropTypes.node = ele aceita números, strings, elementos React, arrays, fragmentos
