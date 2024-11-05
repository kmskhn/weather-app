This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Weather App

A simple weather application built with Next.js that fetches and displays weather data for different cities. Users can view current weather, a 5-day forecast, and favorite cities for quick access.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory with the following content:

   ```NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here```

   Replace `your_api_key_here` with your actual API key from the weather service provider (e.g., OpenWeatherMap).

4. **Run the application:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`/app`**: Contains the main application logic.
- **`/components`**: Reusable React components used throughout the application.
  - `CityDetail.js`: Displays detailed weather information for a selected city.
  - `CitySearch.js`: Search component for finding cities.
  - `CityWeatherCard.js`: A card component showing summarized weather data.
  - `Dashboard.js`: Main dashboard displaying a list of weather cards.
  - `Footer.js`: Footer component.
  - `Header.js`: Header component.
  - `WeatherDetails.js`: Component for showing additional weather details.
- **`/lib`**: Contains utility modules, such as `weatherApi.js`, for interacting with the weather API.

## API Interaction

This app interacts with the weather API to fetch weather data based on user input. 

- **`weatherApi.js`**: The module in the `/lib` directory that makes requests to the weather API using the API key stored in `.env`.
  - **Functions**: This file includes functions to fetch current weather data and the 5-day forecast for a given city.
  - **Error Handling**: The app handles errors in case of failed API requests and displays appropriate messages to the user.
  
The weather data, including temperature, humidity, wind speed, and forecast, is fetched from the API and displayed across different components in a clean, responsive UI.
