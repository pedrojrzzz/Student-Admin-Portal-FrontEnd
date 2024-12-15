import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // Array para armazenar dados
  loading: false, // Indica se os dados estão sendo carregados
  error: null, // Caso de erro, ele fica armazenado aqui
};

const dataSlice = createSlice({
  name: 'fetchData',
  initialState,
  reducers: {
    // Função que indica que a requisição está em andamento
    fetchRequest(state) {
      /* eslint-disable no-param-reassign */
      state.loading = true; // Define que a requisição ainda não foi concluída
      state.error = null; // Atualiza o estado de erro, como nulo
    },
    // Função que indifica que a requisição foi um sucesso
    fetchSuccess(state, action) {
      state.loading = false; // Define que a requisição foi concluída
      state.data = action.payload;
    },
    // Função que indica que a requisição deu erro
    fetchError(state, action) {
      state.loading = false; // Define que a requisição foi concluída
      state.error = action.payload; // Atualiza o estado de error com um novo erro
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchError } = dataSlice.actions;

export default dataSlice.reducer;
