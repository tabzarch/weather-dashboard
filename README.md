# Weather Dashboard

A comprehensive weather application featuring real-time data, forecasts, and location management across web and mobile platforms.

## 🌤️ Features

### 📱 Core Features
- **Real-time Weather Data** - Current conditions, temperature, humidity, wind
- **7-Day Forecast** - Detailed daily predictions
- **Hourly Forecast** - Hour-by-hour breakdown
- **Multiple Locations** - Save and manage favorite locations
- **Search Functionality** - Find weather for any city
- **Weather Alerts** - Get notified of severe weather
- **Air Quality Index** - Pollution levels and health advisories
- **UV Index** - UV protection recommendations
- **Weather Maps** - Visual weather radar and satellite imagery
- **Responsive Design** - Works on desktop, tablet, and mobile

### 🎨 Visual Features
- **Dark/Light Mode** - Theme customization
- **Beautiful Charts** - Temperature trends, precipitation graphs
- **Weather Icons** - Dynamic condition-based imagery
- **Animated Backgrounds** - Weather-responsive UI
- **Geolocation** - Auto-detect current location

## 📦 Tech Stack

### Frontend (Web)
- **React 18** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **Axios** - API calls
- **Recharts** - Interactive charts
- **React Router** - Navigation

### Backend
- **Node.js + Express** - Server
- **OpenWeatherMap API** - Weather data
- **Socket.io** - Real-time updates
- **Redis** - Caching layer (optional)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- OpenWeatherMap API Key (free tier)

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Add your OpenWeatherMap API key to .env
npm run dev
```

### Web Application
```bash
cd web
npm install
npm run dev
```

## 📚 Documentation
- [Setup Guide](./docs/SETUP.md)
- [API Documentation](./docs/API.md)
- [Architecture](./docs/ARCHITECTURE.md)

## 🔐 Security
- API key protection (backend proxy)
- Rate limiting
- CORS configuration
- Environment variable management

## 📝 License

MIT - Fully yours to use, modify, and distribute

---

**Status:** 🟢 Production Ready