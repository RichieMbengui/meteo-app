import React from "react";
import './Card.css';

export const Card = ({day}:any) => {
    return (
    <div className="cardContainer">
        <div className="day">
            <p className="labelDay">{new Date(day.datetime).toDateString()}</p>
        </div>
        <div className="indication">
            <p className="cloud">{day.description}</p>
            <p> Température minimum : {day.tmax} degrès</p>
            <p> Température maximum : {day.tmin} degrès</p>
        </div>
    </div>
);
}