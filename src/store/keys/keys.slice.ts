import { createSlice } from '@reduxjs/toolkit';
import {IKeys} from "types";

const initialState:IKeys  = {
  keys: ['dsa','ddsasa'],
  error: null,
};

export const keysSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    addKey: (state, action) => {
        if (state.keys.indexOf(action.payload) === -1) {
            state.keys.push(action.payload);
        } else {
            state.error = 'Key already exists';
        }
    },
    removeKey: (state, action) => {
        state.keys = state.keys.filter(key => key !== action.payload);
    },
    setError: (state, action) => {
        state.error = action.payload;
    }
  },
});

export const keysActions = keysSlice.actions;
export const keysReducer = keysSlice.reducer;
