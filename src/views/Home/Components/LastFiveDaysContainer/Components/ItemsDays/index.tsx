import React, { useEffect } from "react";
import clear from "../../../../../../assets/sun-freepik.png";
import cloudy from "../../../../../../assets/cloudy-freepik.png";
import rain from "../../../../../../assets/rain-iconixar.png";
import clouds from "../../../../../../assets/scatteredclouds.png";
import showerRain from "../../../../../../assets/shower-rain.png";
import snow from "../../../../../../assets/snow.png";
import thunderStorm from "../../../../../../assets/thunderStorm.png";

interface ControlProps {
  name: string;
  date: string;
  description: string;
}

function index({ name, date, description }: ControlProps) {
  const selectTmage = () => {
    switch (name) {
      case "Clear":
        return clear;

      case "Clouds":
        if (description.toLocaleLowerCase() == "few clouds") {
          return cloudy;
        }
        return clouds;

      case "Thunderstorm":
        return thunderStorm;

      case "Rain":
        if (description.toLocaleLowerCase() == "shower rain") {
          return showerRain;
        }
        return rain;

      case "Snow":
        return snow;

      default:
        return clear;
    }
  };

  return (
    <div className="mt-1 flex h-auto w-full items-center justify-between border-b-2 border-green-light p-4">
      <figure>
        <img className="h-16 w-16" src={selectTmage()} alt={selectTmage()} />
      </figure>
      <p className="cursor-none text-4xl font-bold text-white">{name}</p>
      <p className="cursor-none text-4xl font-bold text-white">{`${date.substring(0, 10)}`}</p>
    </div>
  );
}

export default index;
