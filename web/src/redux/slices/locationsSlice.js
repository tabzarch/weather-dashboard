import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

export const fetchLocations = createAsyncThunk(
  'locations/fetchLocations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getLocations();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch locations');
    }
  }
);

export const addLocationAsync = createAsyncThunk(
  'locations/addLocation',
  async ({ name, lat, lon }, { rejectWithValue }) => {
    try {
      const response = await api.addLocation(name, lat, lon);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to add location');
    }
  }
);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    clearLocations: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addLocationAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { clearLocations } = locationsSlice.actions;
export default locationsSlice.reducer;