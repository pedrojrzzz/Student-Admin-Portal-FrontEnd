/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const studentEditFotoSlice = createSlice({
  name: 'alunosEditFotoSlice',
  initialState,
  reducers: {
    fetchRequestEditFotoStudent(state) {
      state.loading = true;
      state.error = null;
    },

    fetchSuccesEditFotoStudent(state, action) {
      state.loading = false;
      state.data = action.payload;
    },

    fetchErrorEditFotoStudent(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchRequestEditFotoStudent,
  fetchSuccesEditFotoStudent,
  fetchErrorEditFotoStudent,
} = studentEditFotoSlice.actions;
export default studentEditFotoSlice.reducer;
