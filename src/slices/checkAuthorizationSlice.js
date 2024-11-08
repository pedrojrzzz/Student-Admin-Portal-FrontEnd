import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  loading: false,
};
/* eslint-disable no-param-reassign */
const testeSlice = createSlice({
  name: 'testandoAutorização',
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

export const { fetchRequest, fetchSuccess, fetchError } = testeSlice.actions;
export default testeSlice.reducer;
