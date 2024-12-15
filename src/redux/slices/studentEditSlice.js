import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const studentEditSlice = createSlice({
  name: 'alunosEditSlice',
  initialState,
  reducers: {
    fetchRequestEditStudents(state) {
      state.loading = true;
      state.error = null;
    },

    fetchSuccessEditStudent(state, action) {
      state.loading = false;
      state.data = action.payload;
    },

    fetchErrorEditStudent(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchRequestEditStudents,
  fetchSuccessEditStudent,
  fetchErrorEditStudent,
} = studentEditSlice.actions;
export default studentEditSlice.reducer;
