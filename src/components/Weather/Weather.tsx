import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import { Card } from '../Card';
import { Data } from './types';
import './Weather.css';

const TOKEN = 'f764365ebd23ad8f3b4d930db36fc61c434abecfd63f28d9016d52b4345f3784'; 
const INSEE = '75056'; // paris
//https://api.weatherstack.com/forecast?access_key=7e07106120f9235225954fb31937fb4b&query=Paris&forecast_days=5&units=m&language=fr

export const Weather = () => {
  const [data, setData] = useState<Data>({})
  const [dataAvaible, setDataAvaible] = useState(false)
  useEffect(()=>{
    const currentDAte = new Date().toDateString();
    const localStorageData = localStorage.getItem(currentDAte) ? localStorage.getItem(currentDAte) : '';

    if(localStorageData){
      setData(JSON.parse(localStorageData));
      setDataAvaible(true);
    }else{
      localStorage.clear();
      const dataFetch = fetch(`https://api.meteo-concept.com/api/forecast/daily?token=${TOKEN}&insee=${INSEE}`);
      Promise.all([dataFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          setData(weatherResponse);
          setDataAvaible(true);
          localStorage.setItem(new Date().toDateString(), JSON.stringify(weatherResponse));
        })
        .catch(console.log);
    }
  },[])

  if(!dataAvaible) {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
  return (
    <div className="weather">
      {data.city && (<p id="cityName">{data.city.name}</p>)}
      <div className="weatherList">
      {
        data.forecast && data.forecast.slice(0,5).map((item,i) => <Card key={i} day={item}></Card>)
      }
      </div>
    </div>
  );
}
