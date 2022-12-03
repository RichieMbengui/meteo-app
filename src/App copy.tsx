import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// https://api.openweathermap.org/data/2.5/forecast?lat=48.85&lon=2.32&appid=6e08aded5980126ebde0328685eda515&units=metric
// https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=6e08aded5980126ebde0328685eda515
// https://api.openweathermap.org/data/2.5/weather?lat=48.85&lon=2.32&appid=6e08aded5980126ebde0328685eda515

function App() {


  useEffect(()=>{
    const forecastFetch = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=48.85&lon=2.32&appid=6e08aded5980126ebde0328685eda515&units=metric');
    Promise.all([forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        console.log('test ', weatherResponse);
      })
      .catch(console.log);

  },[])

  console.log('test app')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>x@
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
