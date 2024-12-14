import { call, put, takeEvery, delay } from 'redux-saga/effects';
import Cokkies from 'js-cookie';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../slices/studentEditSlice';
import axios from '../services/axios';

function getAuthorization() {
  const authorization = Cokkies.get('tokenUser');
  if (!authorization) {
    return new Error('Não foi possível obter a autorização do usuário');
  }
  return authorization;
}

function editStudentData(studentNewData) {
  const authorization = getAuthorization();
  return axios.put(`/alunos/${studentNewData.idStudent}`, studentNewData, {
    headers: { authorization: `Bearer ${authorization}` },
  });
}

function* fetchEditStudentData(action) {
  try {
    yield delay(1000);
    const response = yield call(editStudentData, action.payload);
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

function* watchFetchEditStudentData() {
  yield takeEvery(fetchRequest, fetchEditStudentData);
}

export default watchFetchEditStudentData;
