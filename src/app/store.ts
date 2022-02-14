import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exhibitionReducer from '../features/exhibition/exhibitionSlice';

export const store = configureStore({
  reducer: {
    exhibition: exhibitionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
