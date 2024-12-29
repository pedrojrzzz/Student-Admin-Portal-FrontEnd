import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchRequestEditFotoStudent,
  fetchSuccesEditFotoStudent,
  fetchErrorEditFotoStudent,
} from '../slices/studentEditFotoSlice';
import axios from '../../services/axios';
import { getAuthorization } from '../../utils/authUtils';

function changeFotoStudent({ id: studentId, file }) {
  const authorization = getAuthorization();

  const formFile = new FormData();
  formFile.append('aluno_id', studentId);
  formFile.append('arquivo', file);

  return axios.put(`/fotos/${studentId}`, formFile, {
    headers: {
      authorization: `Bearer ${authorization}`,
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* fetchChangeFotoStudent(action) {
  try {
    const response = yield call(changeFotoStudent, action.payload);
    yield put(fetchSuccesEditFotoStudent(response.data));
  } catch (error) {
    const serializableError = {
      errorType: error.message,
      status: error.response?.status,
      message: error.response?.data.errors,
    };
    yield put(fetchErrorEditFotoStudent(serializableError));
  }
}

function* watchFetchChangeFotoStudent() {
  yield takeEvery(fetchRequestEditFotoStudent, fetchChangeFotoStudent);
}

export default watchFetchChangeFotoStudent;
