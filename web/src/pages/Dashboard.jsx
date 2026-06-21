import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, fetchForecast, fetchHourlyForecast, fetchAirQuality, fetchUVIndex } from '../redux/slices/weatherSlice';
import CurrentWeather from '../components/CurrentWeather';
import ForecastCard from '../components/ForecastCard';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { current, forecast, hourly, isLoading } = useSelector(state => state.weather);
  const { unit } = useSelector(state => state.ui);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ lat: latitude, lon: longitude }));
          dispatch(fetchForecast({ lat: latitude, lon: longitude }));
          dispatch(fetchHourlyForecast({ lat: latitude, lon: longitude }));
          dispatch(fetchAirQuality({ lat: latitude, lon: longitude }));
          dispatch(fetchUVIndex({ lat: latitude, lon: longitude }));
        }
      );
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading weather data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {current && <CurrentWeather weather={current} unit={unit} />}
      
      {forecast && forecast.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">7-Day Forecast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}