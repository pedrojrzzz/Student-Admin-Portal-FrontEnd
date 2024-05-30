import { createSlice } from '@reduxjs/toolkit'; // Importa a função createSlice do Redux Toolkit

// Define o slice chamado counterSlice
const counterSlice = createSlice({
  name: 'counter', // Nome do slice, que também será usado como o nome do reducer
  initialState: 0, // Estado inicial do slice, aqui definido como 0 (um contador inicializado em zero)
  reducers: {
    // Objetos que contêm os reducers, que são funções puras para alterar o estado
    increment(state) {
      return state + 1; // Action que Incrementa o estado em 1
    },

    decrement(state) {
      return state - 1; // Action que Decrementa o estado em 1
    },
  },
});

// Exporta as ações (actions) geradas automaticamente para os reducers increment e decrement
export const { increment, decrement } = counterSlice.actions;
// Exporta o reducer gerado automaticamente, que será utilizado na configuração do store do Redux
export default counterSlice.reducer;
