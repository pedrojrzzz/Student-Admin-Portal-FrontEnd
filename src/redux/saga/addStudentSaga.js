import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../slices/addStudentSlice';
import axios from '../../services/axios';
import { getAuthorization } from '../../utils/authUtils';

function cresteStudentsApi(newStudent) {
  const authorization = getAuthorization();
  return axios.post('/alunos', newStudent, {
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
