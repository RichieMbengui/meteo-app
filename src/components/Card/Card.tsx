import React from "react";
import './Card.css';

export const Card = ({day}:any) => {
    if(!day) return null;
    return (
    <div className="cardContainer">
        <div className="day">
            <p className="labelDay">{new Date(day.datetime).toDateString()}</p>
        </div>
        <div className="info">
            <p> Température minimum : <span className="value">{day.tmin}°C</span></p>
            <p> Température maximum : <span className="value">{day.tmax}°C</span></p>
        </div>
    </div>
);
}