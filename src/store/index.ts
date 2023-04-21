import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { publicEventsReducer } from './listReducer/reducer';

const rootReducer = combineReducers({
  publicEventsReducer,
});

export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: null,
      },
      immutableCheck: { warnAfter: 90 },
      serializableCheck: { warnAfter: 90 },
    }),
  },
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
