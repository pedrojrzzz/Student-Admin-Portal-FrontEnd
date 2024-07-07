import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const loginSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    fetchRequest(state) {
      state.loading = true;
      state.error = null;
    },

    fetchSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },

    fetchError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    resetLoginState(state) {
      state.data = [];
      state.error = null;
      state.loading = false;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchError, resetLoginState } =
  loginSlice.actions;
export default loginSlice.reducer;
