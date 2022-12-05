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
            <p> Température minimum : {day.tmin} ° </p>
            <p> Température maximum : {day.tmax} ° </p>
        </div>
    </div>
);
}