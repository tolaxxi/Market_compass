import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../features/sidebar/sidebarSlice';
import AddTradePopUpReducer from '../features/TradingJournal/addTradePopSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    addTrade: AddTradePopUpReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
