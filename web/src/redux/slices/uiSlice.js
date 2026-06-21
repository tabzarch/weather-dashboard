import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: localStorage.getItem('darkMode') === 'true' || false,
  unit: localStorage.getItem('unit') || 'celsius',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('darkMode', state.isDarkMode);
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
      localStorage.setItem('unit', state.unit);
    },
  },
});

export const { toggleDarkMode, setUnit } = uiSlice.actions;
export default uiSlice.reducer;