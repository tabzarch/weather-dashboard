import express from 'express';
import {
  getCurrentWeather,
  getForecast,
  getHourlyForecast,
  getAirQuality,
  getUVIndex,
  getWeatherByCity
} from '../services/weatherService.js';

const router = express.Router();

router.get('/current', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ message: 'Latitude and longitude required' });
    const weather = await getCurrentWeather(lat, lon);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/city', async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) return res.status(400).json({ message: 'City name required' });
    const weather = await getWeatherByCity(city);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/forecast', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ message: 'Latitude and longitude required' });
    const forecast = await getForecast(lat, lon);
    res.json(forecast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/hourly', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ message: 'Latitude and longitude required' });
    const hourly = await getHourlyForecast(lat, lon);
    res.json(hourly);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/air-quality', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ message: 'Latitude and longitude required' });
    const airQuality = await getAirQuality(lat, lon);
    res.json(airQuality);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/uv-index', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ message: 'Latitude and longitude required' });
    const uvIndex = await getUVIndex(lat, lon);
    res.json(uvIndex);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;