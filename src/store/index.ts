import { configureStore } from '@reduxjs/toolkit'
import languageSelector from "../reducers/languageSelector";

export const store = configureStore({
  reducer: {
    languageSelector
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

