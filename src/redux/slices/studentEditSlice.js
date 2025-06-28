import { createSlice } from '@reduxjs/toolkit';
import handleSuccess from '../../components/FormModalEdit/handlers/handleSuccess';
import handleErrors from '../../components/FormModalEdit/handlers/handleErrors';
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
      state.data = [];
      state.loading = true;
      state.error = null;
    },

    fetchSuccessEditStudent(state, action) {
      state.loading = false;
      state.data = action.payload;
      handleSuccess();
    },

    fetchErrorEditStudent(state, action) {
      state.loading = false;
      state.error = action.payload;
      handleErrors();
    },
  },
});

export const {
  fetchRequestEditStudents,
  fetchSuccessEditStudent,
  fetchErrorEditStudent,
} = studentEditSlice.actions;
export default studentEditSlice.reducer;
