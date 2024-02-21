import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const initialState = {
  user: null,
  id: null,
  accestoken: null,
  isValid: false,
  order: [],
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
      state.accestoken = payload;
    },
    setorder: (state, action) => {
      const product = action.payload;

      if (product) {
        let found = false;

        for (let i = 0; i < state.order.length; i++) {
          if (state.order[i]?.id === product?.id) {
            state.order[i].Quantity += product?.Quantity;
            state.order[i].totalprice += product?.totalprice;
            found = true;
            break;
          }
        }

        if (!found) {
          state.order = [...state.order, product];
        }
      } else {
        console.log('Invalid payload for setorder:', product);
      }
    },
    setUpdateOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const {setUser, logoutUser, setAccessToken, setorder, setUpdateOrder} =
  userSlice.actions;

export default userSlice.reducer;
