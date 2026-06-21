import axios from 'axios';

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = process.env.OPENWEATHER_BASE_URL || 'https://api.openweathermap.org';

export async function getCurrentWeather(lat, lon) {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/weather`,
      {
        params: {
          lat,
          lon,
          appid: OPENWEATHER_API_KEY,
          units: 'metric'
        }
      }
    );

    const data = response.data;
    return {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind_speed: data.wind.speed,
      visibility: data.visibility,
      description: data.weather[0].description,
      timestamp: new Date(data.dt * 1000).toISOString()
    };
  } catch (error) {
    console.error('Error fetching current weather:', error.message);
    throw new Error('Failed to fetch current weather');
  }
}

export async function getForecast(lat, lon) {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/forecast`,
      {
        params: {
          lat,
          lon,
          appid: OPENWEATHER_API_KEY,
          units: 'metric'
        }
      }
    );

    const data = response.data;
    const forecast = {};

    data.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dateStr = date.toISOString().split('T')[0];

      if (!forecast[dateStr]) {
        forecast[dateStr] = {
          date: new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
          temps: [],
          descriptions: [],
          rain_prob: item.pop * 100,
        };
      }

      forecast[dateStr].temps.push(item.main.temp);
      forecast[dateStr].descriptions.push(item.weather[0].description);
    });

    return Object.values(forecast).map(day => ({
      date: day.date,
      max_temp: Math.max(...day.temps),
      min_temp: Math.min(...day.temps),
      description: day.descriptions[0],
      rain_probability: Math.round(day.rain_prob)
    })).slice(0, 7);
  } catch (error) {
    console.error('Error fetching forecast:', error.message);
    throw new Error('Failed to fetch forecast');
  }
}

export async function getHourlyForecast(lat, lon) {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/forecast`,
      {
        params: {
          lat,
          lon,
          appid: OPENWEATHER_API_KEY,
          units: 'metric'
        }
      }
    );

    const data = response.data;
    return data.list.slice(0, 24).map(item => ({
      time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit' }),
      temp: item.main.temp,
      description: item.weather[0].description
    }));
  } catch (error) {
    console.error('Error fetching hourly forecast:', error.message);
    throw new Error('Failed to fetch hourly forecast');
  }
}

export async function getAirQuality(lat, lon) {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/3.0/air_pollution`,
      {
        params: {
          lat,
          lon,
          appid: OPENWEATHER_API_KEY
        }
      }
    );

    const data = response.data.list[0];
    const components = data.components;

    return {
      aqi: data.main.aqi * 50,
      pm25: components.pm2_5.toFixed(1),
      pm10: components.pm10.toFixed(1)
    };
  } catch (error) {
    console.error('Error fetching air quality:', error.message);
    throw new Error('Failed to fetch air quality');
  }
}

export async function getUVIndex(lat, lon) {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/uvi`,
      {
        params: {
          lat,
          lon,
          appid: OPENWEATHER_API_KEY
        }
      }
    );

    return { index: response.data.value };
  } catch (error) {
    console.error('Error fetching UV index:', error.message);
    throw new Error('Failed to fetch UV index');
  }
}

export async function getWeatherByCity(city) {
  try {
    const response = await axios.get(
      `${BASE_URL}/geo/1.0/direct`,
      {
        params: {
          q: city,
          appid: OPENWEATHER_API_KEY,
          limit: 1
        }
      }
    );

    if (response.data.length === 0) {
      throw new Error('City not found');
    }

    const location = response.data[0];
    return getCurrentWeather(location.lat, location.lon);
  } catch (error) {
    throw new Error('Failed to fetch weather for city');
  }
}