import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import counterReducer from '../slices/counterSlice';
import dataReducer from '../slices/dataSlice';
import loginReducer from '../slices/loginSlice';
import checkAuthorizationReducer from '../slices/checkAuthorizationSlice';
import userIsLoggedInSlice from '../slices/userIsLoggedInSlice';
import infoUserSlice from '../slices/infoUserSlice';
import watchFetchData from '../saga/dataSaga';
import watchFetchContactApiForAuthorization from '../saga/checkAuthorizationSaga';
import watchFetchAlunos from '../saga/alunosSaga';
import alunosSlice from '../slices/alunosSlice';
import studentEditSlice from '../slices/studentEditSlice';

import watchFetchRegisterNewUser from '../saga/registerSaga';
import registerNewUserReducer from '../slices/registerSlice';
import watchFetchLoginUser from '../saga/loginSaga';
import watchFetchEditStudentData from '../saga/studentEditSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    fork(watchFetchData),
    fork(watchFetchRegisterNewUser),
    fork(watchFetchLoginUser),
    fork(watchFetchContactApiForAuthorization),
    fork(watchFetchAlunos),
    fork(watchFetchEditStudentData),
  ]);
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    register: registerNewUserReducer,
    login: loginReducer,
    checkAuthorization: checkAuthorizationReducer,
    userIsLoggedIn: userIsLoggedInSlice,
    infoUser: infoUserSlice,
    alunos: alunosSlice,
    alunosEdit: studentEditSlice,
    // add seus reducers aqui
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Pode add mais middleware apenas coloque ',' e adicione ele
});

sagaMiddleware.run(rootSaga); // Indicando qual saga eu quero que execute

export default store;