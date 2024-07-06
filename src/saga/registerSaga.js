import { call, put, takeEvery, delay } from 'redux-saga/effects';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../slices/registerSlice';
import axios from '../services/axios';

function registerNewUserApi(user) {
  return axios.post('/users', user);
}

function* fetchRegisterNewUser(action) {
  try {
    yield delay(1000);
    const response = yield call(registerNewUserApi, action.payload);
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

function* watchFetchRegisterNewUser() {
  yield takeEvery(fetchRequest, fetchRegisterNewUser);
}

export default watchFetchRegisterNewUser;
