import { call, put, takeEvery, delay } from 'redux-saga/effects';
import axios from '../services/axios';
import { fetchRequest, fetchSuccess, fetchError } from '../slices/loginSlice';

function contactApiForLogin(data) {
  return axios.post('/tokens', data);
}

function* fetchLoginUser(action) {
  try {
    yield delay(1000);
    const response = yield call(contactApiForLogin, action.payload);
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

function* watchFetchLoginUser() {
  yield takeEvery(fetchRequest, fetchLoginUser);
}

export default watchFetchLoginUser;
