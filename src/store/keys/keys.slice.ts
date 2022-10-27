import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setOpenRoom: (state, action) => {
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreator = action.payload.isUserRoomCreator;
    },
  },
});

export const roomActions = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
