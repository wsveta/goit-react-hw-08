import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { value: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.value;
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
