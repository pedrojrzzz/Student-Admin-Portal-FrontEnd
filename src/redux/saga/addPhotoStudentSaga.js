import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../slices/addPhotoStudentSlice';
import axios from '../../services/axios';
import { getAuthorization } from '../../utils/authUtils';

function addPhotoStudent({ id: studentId, file }) {
  const authorization = getAuthorization();

  const formFile = new FormData();
  formFile.append('aluno_id', studentId);
  formFile.append('arquivo', file);

  return axios.post(`/fotos/${studentId}`, formFile, {
    headers: {
      authorization: `Bearer ${authorization}`,
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* fetchAddPhotoStudent(action) {
  try {
    const response = yield call(addPhotoStudent, action.payload);
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

function* watchFetchAddPhotoStudent() {
  yield takeEvery(fetchRequest, fetchAddPhotoStudent);
}

export default watchFetchAddPhotoStudent;
