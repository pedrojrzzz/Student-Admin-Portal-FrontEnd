import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import counterReducer from '../slices/counterSlice';
import dataReducer from '../slices/dataSlice';
import watchFetchData from '../saga/dataSaga';

import watchFetchRegisterNewUser from '../saga/registerSaga';
import registerNewUserReducer from '../slices/registerSlice';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(watchFetchData), fork(watchFetchRegisterNewUser)]);
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    register: registerNewUserReducer,
    // add seus reducers aqui
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Pode add mais middleware apenas coloque ',' e adicione ele
});

sagaMiddleware.run(rootSaga); // Indicando qual saga eu quero que execute

export default store;
