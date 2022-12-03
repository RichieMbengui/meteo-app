import React from 'react';
import './App.css';
import { Weather } from './components/Weather';

// https://api.openweathermap.org/data/2.5/forecast?lat=48.85&lon=2.32&appid=6e08aded5980126ebde0328685eda515&units=metric
// https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=6e08aded5980126ebde0328685eda515
// https://api.openweathermap.org/data/2.5/weather?lat=48.85&lon=2.32&appid=6e08aded5980126ebde0328685eda515

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
