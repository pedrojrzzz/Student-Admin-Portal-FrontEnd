/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  response: [],
  loading: false,
  error: null,
};

const addStudentSlice = createSlice({
  name: 'addStudentSlice',
  initialState,
  reducers: {
    fetchRequest(state) {
      state.loading = true;
      state.error = null;
    },

    fetchSuccess(state, action) {
      state.loading = false;
      state.response = action.payload;
    },

    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchError } =
  addStudentSlice.actions;
export default addStudentSlice.reducer;
