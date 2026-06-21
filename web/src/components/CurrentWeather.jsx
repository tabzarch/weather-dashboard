import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react';

export default function CurrentWeather({ weather, unit }) {
  if (!weather) return null;

  const tempUnit = unit === 'celsius' ? '°C' : '°F';
  const speedUnit = unit === 'celsius' ? 'm/s' : 'mph';

  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('rain')) return <CloudRain className="text-blue-500" size={48} />;
    if (desc.includes('cloud')) return <Cloud className="text-gray-500" size={48} />;
    if (desc.includes('clear') || desc.includes('sunny')) return <Sun className="text-yellow-500" size={48} />;
    return <Cloud className="text-gray-400" size={48} />;
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-800 rounded-lg shadow-lg p-8 text-white">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold">{weather.city}</h2>
          <p className="text-blue-100">{new Date().toLocaleDateString()}</p>
        </div>
        <div>{getWeatherIcon(weather.description)}</div>
      </div>

      <div className="mb-8">
        <div className="text-6xl font-bold">{Math.round(weather.temp)}{tempUnit}</div>
        <p className="text-blue-100 capitalize mt-2">{weather.description}</p>
        <p className="text-blue-100">Feels like {Math.round(weather.feels_like)}{tempUnit}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Droplets size={18} />
            <span className="text-sm">Humidity</span>
          </div>
          <p className="text-2xl font-bold">{weather.humidity}%</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Wind size={18} />
            <span className="text-sm">Wind</span>
          </div>
          <p className="text-2xl font-bold">{Math.round(weather.wind_speed)} {speedUnit}</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Eye size={18} />
            <span className="text-sm">Visibility</span>
          </div>
          <p className="text-2xl font-bold">{(weather.visibility / 1000).toFixed(1)} km</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Gauge size={18} />
            <span className="text-sm">Pressure</span>
          </div>
          <p className="text-2xl font-bold">{weather.pressure} mb</p>
        </div>
      </div>
    </div>
  );
}