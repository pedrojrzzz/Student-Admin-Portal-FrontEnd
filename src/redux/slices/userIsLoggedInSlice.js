import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  isLoggedIn: false,
};

const userIsLoggedIn = createSlice({
  name: 'userIsLoggedIn',
  initialState,
  reducers: {
    logado(state) {
      state.isLoggedIn = true;
    },

    deslogado(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { logado, deslogado } = userIsLoggedIn.actions;
export default userIsLoggedIn.reducer;
