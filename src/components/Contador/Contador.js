import { useDispatch, useSelector } from 'react-redux'; // Importa hooks do React-Redux: useDispatch para disparar ações e useSelector para acessar o estado do Redux.
import { increment, decrement } from '../../slices/counterSlice'; // Importa as ações increment e decrement do slice do contador.

export default function Contador() {
  // Define um componente funcional React chamado Contador.
  const counter = useSelector((state) => state.counter); // Usa o hook useSelector para obter o valor atual do estado counter do Redux.
  const dispatch = useDispatch(); // Usa o hook useDispatch para obter a função dispatch que permite disparar ações para o Redux.

  const handleIncrement = () => {
    // Define uma função que será chamada quando o botão de incrementar for clicado.
    dispatch(increment()); // Dispara a ação increment para aumentar o valor do contador no estado do Redux.
  };

  const handleDecrement = () => {
    // Define uma função que será chamada quando o botão de decrementar for clicado.
    dispatch(decrement()); // Dispara a ação decrement para diminuir o valor do contador no estado do Redux.
  };

  return (
    // Retorna o JSX que será renderizado pelo componente.
    <div>
      <h1>Contador: {counter}</h1> {/* Mostra o valor atual do contador. */}
      <button type="button" onClick={handleIncrement}>
        {' '}
        {/* Botão para incrementar o contador. */}
        Incrementar
      </button>
      <button type="button" onClick={handleDecrement}>
        {' '}
        {/* Botão para decrementar o contador. */}
        Decrementar
      </button>
    </div>
  );
}
