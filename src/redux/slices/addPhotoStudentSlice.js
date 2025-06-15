/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const addPhotoStudentSlice = createSlice({
  name: 'addSPhotoStudentSlice',
  initialState,
  reducers: {
    fetchRequest(state) {
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

export const { fetchRequest, fetchSuccess, fetchError } =
  addPhotoStudentSlice.actions;
export default addPhotoStudentSlice.reducer;
