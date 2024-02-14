import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const initialState = {
  user: null,
  id: null,
  accestoken: null,
  isValid: false,
};

export const userSlice = createSlice({
  name: 'Auths',
  initialState,
  reducers: {
    setUser: (state, payload) => {
      //   console.log('=====>>>>>>>>>>>>>>>>>>reducers', payload.payload);
      state.id = payload.payload._id;
      state.user = payload.payload;
      state.isValid = true;
    },
    logoutUser: (state, payload) => {
      console.log(state, 'state');
      state.user = null;
      state.accestoken = null;
      state.id = null;
      state.isValid = null;
    },
    setAccessToken: (state, {payload}) => {
      console.log('payload', payload);
      state.accestoken = payload;
    },
  },
});

export const {setUser, logoutUser, setAccessToken} = userSlice.actions;

export default userSlice.reducer;
