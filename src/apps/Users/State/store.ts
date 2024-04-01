import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import getResultsReducer from "./reducers/resultReducer"

export const store = configureStore({
  reducer: {
    getResults: getResultsReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
