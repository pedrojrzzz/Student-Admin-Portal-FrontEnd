import { useRef } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest } from '../slices/checkAuthorizationSlice';

// Esse componente checa se o user já está autenticado e não deixa ele acessar login ou register novamente
export default function CheckAuth({ children }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.checkAuthorization,
  );
  const fetchWasMade = useRef(false);
  const cookie = new Cookies(null, { path: '/' });
  const navigate = useNavigate();

  const token = cookie.get('tokenUser');

  if (token) {
    const theToken = `Bearer ${token}`;

    if (!fetchWasMade.current) {
      dispatch(fetchRequest(theToken));
      fetchWasMade.current = true;
    }

    if (fetchWasMade.current && error) {
      return navigate('/error');
    }

    if (!loading && data.length < 1) {
      return navigate('/404');
    }

    return navigate('/portal-alunos');
  }

  return children;
}

CheckAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
