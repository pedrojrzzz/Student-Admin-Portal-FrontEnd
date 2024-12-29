import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchRequestEditStudents,
  fetchSuccessEditStudent,
  fetchErrorEditStudent,
} from '../slices/studentEditSlice';
import axios from '../../services/axios';
import { getAuthorization } from '../../utils/authUtils';

function editStudentData(studentNewData) {
  const authorization = getAuthorization();
  return axios.put(`/alunos/${studentNewData.id}`, studentNewData, {
    headers: { authorization: `Bearer ${authorization}` },
  });
}

function* fetchEditStudentData(action) {
  try {
    const response = yield call(editStudentData, action.payload);
    yield put(fetchSuccessEditStudent(response.data));
  } catch (error) {
    const serializableError = {
      errorType: error.message,
      status: error.response?.status,
      message: error.response?.data.errors || 'Erro desconhecido',
    };
    yield put(fetchErrorEditStudent(serializableError));
  }
}

function* watchFetchEditStudentData() {
  yield takeEvery(fetchRequestEditStudents, fetchEditStudentData);
}

export default watchFetchEditStudentData;
