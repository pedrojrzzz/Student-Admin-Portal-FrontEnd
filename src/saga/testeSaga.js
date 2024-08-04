import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../services/axios';
import { fetchError, fetchRequest, fetchSuccess } from '../slices/testeSlice';

function contactApiForAuthorization(token) {
  const headers = {
    authorization: token,
  };
  return axios.get('/teste', { headers });
}

function* fetchContactApiForAuthorization(action) {
  try {
    const response = yield call(contactApiForAuthorization, action.payload);
    console.log(response.data);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    const serializableError = {
      errorType: error.message,
      status: error.response?.status,
      message: error.response?.data.errors,
    };
    console.log(serializableError);
    yield put(fetchError(serializableError));
  }
}

function* watchFetchContactApiForAuthorization() {
  yield takeEvery(fetchRequest.type, fetchContactApiForAuthorization);
}

export default watchFetchContactApiForAuthorization;
