import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  dataUser: null,
};

const infoUser = createSlice({
  name: 'infoUser',
  initialState,
  reducers: {
    saveInfoUser(state, action) {
      state.dataUser = action.payload;
    },
  },
});

export const { saveInfoUser } = infoUser.actions;
export default infoUser.reducer;
