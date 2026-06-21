import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import locationsReducer from './slices/locationsSlice';
import alertsReducer from './slices/alertsSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    locations: locationsReducer,
    alerts: alertsReducer,
    ui: uiReducer,
  },
});

export default store;