/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFotoSlice: [],
  loadingFotoSlice: false,
  errorFotoSlice: null,
};

const studentEditFotoSlice = createSlice({
  name: 'alunosEditFotoSlice',
  initialState,
  reducers: {
    fetchRequestEditFotoStudent(state) {
      state.loadingFotoSlice = true;
      state.errorFotoSlice = null;
    },

    fetchSuccesEditFotoStudent(state, action) {
      state.loadingFotoSlice = false;
      state.dataFotoSlice = action.payload;
    },

    fetchErrorEditFotoStudent(state, action) {
      state.loadingFotoSlice = false;
      state.errorFotoSlice = action.payload;
    },
  },
});

export const {
  fetchRequestEditFotoStudent,
  fetchSuccesEditFotoStudent,
  fetchErrorEditFotoStudent,
} = studentEditFotoSlice.actions;
export default studentEditFotoSlice.reducer;
