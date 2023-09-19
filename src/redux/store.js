import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import globalReducer from "redux/globalSlice";
import { watcherSaga } from "redux/sagas/index";

const reducer = combineReducers({
  global: globalReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;