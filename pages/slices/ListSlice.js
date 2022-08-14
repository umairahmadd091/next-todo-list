import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    updateList: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    deleteItem: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { updateList, deleteItem } = listSlice.actions;
export const selectList = (state) => state.list;

export default listSlice.reducer;
