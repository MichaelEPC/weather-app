import React, { useEffect } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import clear from "../../../../assets/sun-freepik.png";
import cloudy from "../../../../assets/cloudy-freepik.png";
import rain from "../../../../assets/rain-iconixar.png";
import clouds from "../../../../assets/scatteredclouds.png";
import showerRain from "../../../../assets/shower-rain.png";
import snow from "../../../../assets/snow.png";
import thunderStorm from "../../../../assets/thunderStorm.png";

function CityNameContainer() {
  const data = useSelector((state) => state.data.data.cityInfo);
  const today = new Date();
  const formattedDate = today.toLocaleDateString("es-ES");

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

  useEffect(() => {}, []);

  return (
    <article
      className={`${style.cardCityName} flex w-full flex-col items-center 2xl:w-3/4`}
    >
      <div className="flex h-auto w-full items-center justify-center">
        <svg
          className="h-14 fill-red-600"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
        </svg>
        <h2
          className={`text-5xl font-bold text-white underline`}
        >{`${data.name} - ${data.sys.country}`}</h2>
      </div>
      <div className="mt-4 flex w-full flex-col items-center justify-center">
        <p className="text-3xl font-semibold text-white">{`${data.weather[0].main}`}</p>
        <figure className="mt-2">
          <img
            src={selectTmage(data.weather[0].main, data.weather[0].description)}
            alt={selectTmage(data.weather[0].main, data.weather[0].description)}
          />
        </figure>
      </div>
      <p className="mt-4 text-3xl font-semibold text-green-light">
        {data.weather[0].description}
      </p>

      <div className="mt-4 flex h-auto w-full flex-col items-center justify-center lg:flex-row">
        <div className="mr-2 flex items-center justify-center">
          <svg
            className="fill-white lg:h-16 lg:w-16"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 24 24"
          >
            <path d="M9 16a3.001 3.001 0 0 0 6 0c0-.353-.072-.686-.184-1H9.184A2.962 2.962 0 0 0 9 16z"></path>
            <path d="M18 6V4h-3.185A2.995 2.995 0 0 0 12 2c-1.654 0-3 1.346-3 3v5.8A6.027 6.027 0 0 0 6 16c0 3.309 2.691 6 6 6s6-2.691 6-6a6.027 6.027 0 0 0-3-5.2V10h3V8h-3V6h3zm-4.405 6.324A4.033 4.033 0 0 1 16 16c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.585.944-3.027 2.405-3.676l.595-.263V5a1 1 0 0 1 2 0v7.061l.595.263z"></path>
          </svg>
          <p className="text-4xl font-semibold text-white">{`${data.main.temp.toFixed()}ºC`}</p>
        </div>
        <div className="flex items-center justify-center">
          <svg
            className="fill-white lg:h-16 lg:w-16"
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
          >
            <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
            <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
          </svg>
          <p className="text-4xl font-semibold text-white">{`${formattedDate}`}</p>
        </div>
      </div>
    </article>
  );
}

export default CityNameContainer;
