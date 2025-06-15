import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../slices/addStudentSlice';
import axios from '../../services/axios';
import { getAuthorization } from '../../utils/authUtils';

function cresteStudentsApi({ newStudent, file }) {
  const authorization = getAuthorization();

  console.log('dentro do saga');
  console.log(newStudent);
  console.log(file);

  const formData = new FormData();
  formData.append('aluno', JSON.stringify(newStudent));
  formData.append('arquivo', file); // Arquivo aqui

  return axios.post('/alunos', formData, {
    headers: {
      authorization: `Bearer ${authorization}`,
    },
  });
}

function* fetchCreateStudentApi(action) {
  try {
    delay(1000);
    const response = yield call(cresteStudentsApi, action.payload);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    const serializableError = {
      errorType: error.message,
      status: error.response?.status,
      message: error.response?.data.errors,
    };
    yield put(fetchError(serializableError));
  }
}

function* watchFetchCreateStudentApi() {
  yield takeEvery(fetchRequest, fetchCreateStudentApi);
}

export default watchFetchCreateStudentApi;
