import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../services/axios';
import {
  fetchError,
  fetchRequest,
  fetchSuccess,
} from '../slices/checkAuthorizationSlice';

function contactApiForAuthorization(token) {
  const headers = {
    authorization: token,
  };
  return axios.get('/tokens/checkAuth', { headers });
}

function* fetchContactApiForAuthorization(action) {
  try {
    const response = yield call(contactApiForAuthorization, action.payload);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    const serializableError = {
      errorType: error.message,
      status: error.response?.status,
      message: error.response?.data.errors,
    };
    // eslint-disable-next-line no-console
    console.log(serializableError);
    yield put(fetchError(serializableError));
  }
}

function* watchFetchContactApiForAuthorization() {
  yield takeEvery(fetchRequest.type, fetchContactApiForAuthorization);
}

export default watchFetchContactApiForAuthorization;
