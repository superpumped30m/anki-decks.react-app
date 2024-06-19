import { configureStore } from '@reduxjs/toolkit'
import deckSlice from './deckSlice'
// ...

export const store = configureStore({
  reducer: {
    decks: deckSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch