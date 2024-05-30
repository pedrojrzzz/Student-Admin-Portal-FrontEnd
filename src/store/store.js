import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../slices/counterSlice';
import dataReducer from '../slices/dataSlice';
import watchFetchData from '../saga/dataSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    // add seus reducers aqui
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Pode add mais middleware apenas coloque ',' e adicione ele
});

sagaMiddleware.run(watchFetchData); // Indicando qual saga eu quero que execute

export default store;
