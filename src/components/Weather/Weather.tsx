import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import { Card } from '../Card';
import { Data } from './types';

//https://api.weatherstack.com/forecast?access_key=7e07106120f9235225954fb31937fb4b&query=Paris&forecast_days=5&units=m&language=fr

export const Weather = () => {

  const [data, setData] = useState<Data>({})
  const [dataAvaible, setDataAvaible] = useState(false)
  useEffect(()=>{
    // DOC https://api.meteo-concept.com/documentation#forecast-map-day
    const forecastFetch = fetch('https://api.meteo-concept.com/api/forecast/daily?token=f764365ebd23ad8f3b4d930db36fc61c434abecfd63f28d9016d52b4345f3784&insee=75056');
    Promise.all([forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setData(weatherResponse);
        setDataAvaible(true);
      })
      .catch(console.log);

  },[])

  if(!dataAvaible) {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
  return (
    <div className="Weather">
      {data.city && (<p>{data.city.name}</p>)}
      {
        data.forecast && data.forecast.slice(0,5).map((item,i) => <Card key={i} day={item}></Card>)
      }
    </div>
  );
}
