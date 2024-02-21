import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";
import userSlice from "./userSlice";

// Cofigurazione dello store
export const store = configureStore({
  reducer: { quiz: quizSlice, user: userSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
