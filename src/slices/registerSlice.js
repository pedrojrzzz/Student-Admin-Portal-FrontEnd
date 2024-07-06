import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'registerNewUser',
  initialState,
  reducers: {
    fetchRequest(state) {
      /* eslint-disable no-param-reassign */
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

    resetRegisterState(state) {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchError, resetRegisterState } =
  registerSlice.actions;
export default registerSlice.reducer;
