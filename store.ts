import { configureStore } from "@reduxjs/toolkit";
import slotsReducer from "./features/slots/slotsSlice";

export const store = configureStore({
  reducer: {
    slots: slotsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
