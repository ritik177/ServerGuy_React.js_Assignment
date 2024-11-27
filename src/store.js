
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  searchHistory: [],
  data: [],
  query: '',
  page: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    addSearchHistory: (state, action) => {
      state.searchHistory.push(action.payload);
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  }
});

export const { setUser, addSearchHistory, setData, setQuery, setPage } = appSlice.actions;
export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
