import React from "react";
import style from "./style.module.css";

interface ControlProps {
  city: string;
  country: string;
  lat: number;
  lon: number;
  changePlaceinfo: (lat: number, lon: number) => void;
}

function index({ city, country, lat, lon, changePlaceinfo }: ControlProps) {
  return (
    <article
      className={`${style.cityItem} mr-2 mt-3 flex cursor-pointer items-center justify-center p-8 lg:w-full`}
      onClick={() => changePlaceinfo(lat, lon)}
    >
      <svg
        className="h-14 fill-red-600"
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
      </svg>
      <p className="text-2xl font-semibold text-white">
        {city} - <span>{country}</span>
      </p>
    </article>
  );
}

export default index;
