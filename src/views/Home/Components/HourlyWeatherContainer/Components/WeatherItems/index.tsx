import React from "react";
import cloudy from "../../../../../../assets/cloudy-freepik.png";
import clear from "../../../../../../assets/sun-freepik.png";
import rain from "../../../../../../assets/rain-iconixar.png";
import clouds from "../../../../../../assets/scatteredclouds.png";
import showerRain from "../../../../../../assets/shower-rain.png";
import snow from "../../../../../../assets/snow.png";
import thunderStorm from "../../../../../../assets/thunderStorm.png";

interface ControlProps {
  hour: string;
  temp: number;
  weather: string;
  description: string;
}

function index({ hour, temp, weather, description }: ControlProps) {
  const selectTmage = (name: string, description: string) => {
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
    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold text-white">{hour}</p>
      <div className="w-20">
        <img
          src={selectTmage(weather, description)}
          alt={selectTmage(weather, description)}
        />
      </div>
      <p className="m-1 text-3xl font-bold text-white">{`${temp.toFixed()}ºC`}</p>
    </div>
  );
}

export default index;
