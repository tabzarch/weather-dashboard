# Weather Dashboard Setup Guide

## Prerequisites
- Node.js 16+
- npm or yarn
- Git
- OpenWeatherMap API Key (free tier)

## Getting OpenWeatherMap API Key

1. Go to [openweathermap.org](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key from your account dashboard
4. Add the key to your `.env` files

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/tabzarch/weather-dashboard.git
cd weather-dashboard
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Add your OpenWeatherMap API key to .env
OPENWEATHER_API_KEY=your_key_here
npm run dev
```

Backend runs on `http://localhost:5000`

### 3. Web Application Setup
```bash
cd ../web
npm install
npm run dev
```

Web app runs on `http://localhost:3000`

## API Endpoints

### Weather
- `GET /api/weather/current?lat={lat}&lon={lon}` - Current weather
- `GET /api/weather/city?city={city}` - Weather by city name
- `GET /api/weather/forecast?lat={lat}&lon={lon}` - 7-day forecast
- `GET /api/weather/hourly?lat={lat}&lon={lon}` - Hourly forecast
- `GET /api/weather/air-quality?lat={lat}&lon={lon}` - Air quality data
- `GET /api/weather/uv-index?lat={lat}&lon={lon}` - UV index

### Locations
- `GET /api/locations` - Get all saved locations
- `POST /api/locations` - Add a location
- `DELETE /api/locations/:id` - Remove a location

### Alerts
- `GET /api/alerts` - Get all alerts
- `POST /api/alerts` - Create a weather alert
- `DELETE /api/alerts/:id` - Delete an alert

## Troubleshooting

### API Key Issues
- Verify API key is valid
- Check OpenWeatherMap rate limits
- Ensure CORS is configured

### Geolocation Issues
- Use HTTPS in production
- Check browser permissions
- Fallback to default location if needed

## Features
✅ Real-time weather data
✅ 7-day forecast
✅ Hourly forecast
✅ Air quality index
✅ UV index
✅ Location management
✅ Responsive design
✅ Dark mode support

## License
MIT - Fully yours to use and modify