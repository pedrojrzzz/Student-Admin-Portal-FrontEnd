import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { DivContainerLoader, DivDivisor } from './styled';

const optionNotify = {
  position: 'top-center',
  pauseOnHover: false,
  theme: 'dark',
  autoClose: 6000,
  toastId: 'error1', // Serve para não ficar duplicando os toastify
};

// Coloque mensagem, delay nas propriedades da função
export default function PageLoading(props) {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  const notify = () => {
    const { msg } = location.state;
    if (count === 5) toast.error(msg, optionNotify);
  };

  // Verificando se existe alguma props, caso não mande o user pra home
  useEffect(() => {
    if (Object.keys(props).length === 1) {
      navigate('/');
    }
  }, []);

  // Contador reverso
  useEffect(() => {
    notify();
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
      clearTimeout(timer);
      navigate('/');
    }
  }, [count]);

  return (
    <DivContainerLoader>
      <DivDivisor>
        <div id="divLoading">
          <ClipLoader size="150px" color="#ffffff" />
        </div>
        <div id="divMensagemRedirect">
          <p>Redirecionando em {count}</p>
        </div>
      </DivDivisor>
    </DivContainerLoader>
  );
}

PageLoading.propTypes = {
  props: PropTypes.shape({ msg: PropTypes.string.isRequired }).isRequired,
};
