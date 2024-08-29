import React, { useEffect } from "react";
import style from "./style.module.css";
import WeatherItems from "./Components/WeatherItems";
import { useSelector, UseSelector } from "react-redux";

function index() {
  const data = useSelector((state) => state.data.data.hourlyForeCast.list);
  const [weatherPerHour, setWeatherPerHour] = React.useState([]);

  const filterWeatherToday = () => {
    const date = new Date();
    const today = date.getDate();
    let filteredData = data.filter((weather) => {
      if (weather.dt_txt.substring(8, 10) == today) {
        return true;
      }
      return false;
    });
    if (filteredData.length === 0) {
      filteredData = data.filter((weather) => {
        if (weather.dt_txt.substring(8, 10) == today + 1) {
          return true;
        }
        return false;
      });
    }
    return filteredData;
  };

  useEffect(() => {
    const filteredData = filterWeatherToday();
    setWeatherPerHour(filteredData);
  }, [data]);

  return (
    <article
      className={`${style.cardHourlyWeather} mt-4 flex h-auto w-full flex-col items-center p-2`}
    >
      <div className="flex h-auto w-full items-center justify-center">
        <svg
          className="fill-green-light"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
        </svg>
        <h3 className="ml-1 text-5xl font-bold text-white">Hourly ForeCast</h3>
      </div>
      <div className={`mt-3 grid grid-cols-3 gap-10`}>
        {weatherPerHour?.map((weather) => (
          <WeatherItems
            key={weather.dt}
            hour={weather.dt_txt.substring(11, 16)}
            temp={weather.main.temp}
            weather={weather.weather[0].main}
            description={weather.weather[0].description}
          />
        ))}
      </div>
    </article>
  );
}

export default index;
