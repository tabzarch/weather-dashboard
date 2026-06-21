import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await api.getWeather(lat, lon);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch weather');
    }
  }
);

export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await api.getForecast(lat, lon);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch forecast');
    }
  }
);

export const fetchHourlyForecast = createAsyncThunk(
  'weather/fetchHourlyForecast',
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await api.getHourlyForecast(lat, lon);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch hourly forecast');
    }
  }
);

export const fetchAirQuality = createAsyncThunk(
  'weather/fetchAirQuality',
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await api.getAirQuality(lat, lon);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch air quality');
    }
  }
);

export const fetchUVIndex = createAsyncThunk(
  'weather/fetchUVIndex',
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await api.getUVIndex(lat, lon);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch UV index');
    }
  }
);

const initialState = {
  current: null,
  forecast: [],
  hourly: [],
  airQuality: null,
  uvIndex: null,
  isLoading: false,
  error: null,
  lastUpdated: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearWeather: (state) => {
      state.current = null;
      state.forecast = [];
      state.hourly = [];
      state.airQuality = null;
      state.uvIndex = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.current = action.payload;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      })
      .addCase(fetchHourlyForecast.fulfilled, (state, action) => {
        state.hourly = action.payload;
      })
      .addCase(fetchAirQuality.fulfilled, (state, action) => {
        state.airQuality = action.payload;
      })
      .addCase(fetchUVIndex.fulfilled, (state, action) => {
        state.uvIndex = action.payload;
      });
  },
});

export const { clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;