import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const alunosSlice = createSlice({
  name: 'alunosSlice',
  initialState,
  reducers: {
    fetchRequest(state) {
      state.data = [];
      state.loading = true;
      state.error = null;
    },

    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },

    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchError } = alunosSlice.actions;
export default alunosSlice.reducer;
