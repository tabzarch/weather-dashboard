import React from 'react';
import { Cloud, CloudRain, Sun, CloudSnow } from 'lucide-react';

export default function ForecastCard({ day }) {
  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('rain')) return <CloudRain className="text-blue-500" size={32} />;
    if (desc.includes('cloud')) return <Cloud className="text-gray-500" size={32} />;
    if (desc.includes('clear') || desc.includes('sunny')) return <Sun className="text-yellow-500" size={32} />;
    if (desc.includes('snow')) return <CloudSnow className="text-blue-300" size={32} />;
    return <Cloud className="text-gray-400" size={32} />;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">{day.date}</h3>
      
      <div className="flex justify-center mb-3">
        {getWeatherIcon(day.description)}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3 capitalize">
        {day.description}
      </p>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">High</span>
          <span className="font-semibold text-gray-800 dark:text-white">{Math.round(day.max_temp)}°</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Low</span>
          <span className="font-semibold text-gray-800 dark:text-white">{Math.round(day.min_temp)}°</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Rain</span>
          <span className="font-semibold text-gray-800 dark:text-white">{day.rain_probability}%</span>
        </div>
      </div>
    </div>
  );
}