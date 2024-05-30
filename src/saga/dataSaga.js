import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchError } from '../slices/dataSlice';
import axios from '../services/axios';

// Função que faz a requisição para a API usando o axios.
function fetchDataApi() {
  return axios.get('/alunos');
}

// Saga responsável por fazer a requisição para a API e disparar as ações apropriadas.
function* fetchData() {
  // Início do bloco try...catch para capturar erros durante a execução da saga.
  try {
    // Criando um delay para mostrar o spinner
    yield delay(1000);
    // Faz a chamada assíncrona para a função fetchDataApi usando o efeito call.
    const response = yield call(fetchDataApi);

    // Dispara a ação fetchSuccess com os dados recebidos da resposta da API.
    yield put(fetchSuccess(response.data));
  } catch (error) {
    // Em caso de erro, dispara a ação fetchError com a mensagem de erro.
    yield put(fetchError(error.message));
  }
}

// Saga responsável por observar a ação fetchRequest e chamar a saga fetchData quando essa ação é disparada.
function* watchFetchData() {
  // Essa função é uma saga responsável por observar a ação `fetchRequest` e chamar a saga `fetchData` sempre que essa ação é disparada.

  // O efeito `takeEvery` é como um observador. Ele "escuta" todas as ocorrências de uma ação específica (no caso, `fetchRequest`)
  // e executa uma função (no caso, `fetchData`) em resposta a cada ocorrência.

  // Aqui, estamos dizendo: "Toda vez que a ação `fetchRequest` for disparada, execute a saga `fetchData`."
  yield takeEvery(fetchRequest.type, fetchData);
}

export default watchFetchData;
