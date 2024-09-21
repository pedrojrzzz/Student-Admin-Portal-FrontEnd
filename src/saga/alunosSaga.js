import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchError } from '../slices/alunosSlice';
import axios from '../services/axios';

function fetchAlunosApi() {
  return axios.get('/alunos');
}

function* fetchAlunos() {
  try {
    yield delay(1000);
    const response = yield call(fetchAlunosApi);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

function* watchFetchAlunos() {
  yield takeEvery(fetchRequest.type, fetchAlunos);
}

export default watchFetchAlunos;
