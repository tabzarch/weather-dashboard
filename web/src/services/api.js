import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Weather endpoints
export const getWeather = (lat, lon) =>
  api.get(`/weather/current`, { params: { lat, lon } });

export const getWeatherByCity = (city) =>
  api.get(`/weather/city`, { params: { city } });

export const getForecast = (lat, lon) =>
  api.get(`/weather/forecast`, { params: { lat, lon } });

export const getHourlyForecast = (lat, lon) =>
  api.get(`/weather/hourly`, { params: { lat, lon } });

export const getAirQuality = (lat, lon) =>
  api.get(`/weather/air-quality`, { params: { lat, lon } });

export const getUVIndex = (lat, lon) =>
  api.get(`/weather/uv-index`, { params: { lat, lon } });

// Locations
export const getLocations = () =>
  api.get(`/locations`);

export const addLocation = (name, lat, lon) =>
  api.post(`/locations`, { name, lat, lon });

export const removeLocation = (id) =>
  api.delete(`/locations/${id}`);

// Alerts
export const getAlerts = () =>
  api.get(`/alerts`);

export const createAlert = (city, condition) =>
  api.post(`/alerts`, { city, condition });

export const deleteAlert = (id) =>
  api.delete(`/alerts/${id}`);

export default api;