import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';
import rootSaga from './sagas';

/**
 * Creates the Redux Saga middleware.
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Configures the Redux store with the root reducer and middleware.
 * Disables the default thunk middleware and serializable check, and adds the Saga middleware.
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
    ),
});

/**
 * Runs the root saga using the Saga middleware.
 */
sagaMiddleware.run(rootSaga);

/**
 * Type for the root state of the Redux store.
 * Represents the return type of the root reducer.
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * Type for the app dispatch.
 * Represents the dispatch function of the Redux store.
 */
export type AppDispatch = typeof store.dispatch;

export default store;
