import React, { useEffect } from "react";
import style from "./style.module.css";
import ItemsDays from "./Components/ItemsDays";
import { useSelector } from "react-redux";

function index() {
  const data = useSelector((state) => state.data.data.hourlyForeCast.list);
  const [dataFiltered, setDataFiltered] = React.useState([]);
  const getDaysWeather = () => {
    let daySeparator = "";
    const dataFiltered = data.filter((hourlyWeather) => {
      if (hourlyWeather.dt_txt.substring(8, 10) != daySeparator) {
        daySeparator = hourlyWeather.dt_txt.substring(8, 10);
        return true;
      }
      return false;
    });
    return dataFiltered;
  };

  const formatDate = (date) => {
    let dateShorted = date.substring(5, 10);
    switch (dateShorted.substring(0, 2)) {
      case "01":
        return `Jan/${dateShorted.substring(3)}`;

      case "02":
        return `Feb/${dateShorted.substring(3)}`;

      case "03":
        return `Mar/${dateShorted.substring(3)}`;

      case "04":
        return `Apr/${dateShorted.substring(3)}`;

      case "05":
        return `May/${dateShorted.substring(3)}`;

      case "06":
        return `Jun/${dateShorted.substring(3)}`;

      case "07":
        return `Jul/${dateShorted.substring(3)}`;

      case "08":
        return `Agu/${dateShorted.substring(3)}`;

      case "09":
        return `Sep/${dateShorted.substring(3)}`;

      case "10":
        return `Oct/${dateShorted.substring(3)}`;

      case "11":
        return `Nom/${dateShorted.substring(3)}`;

      default:
        return `Dec/${dateShorted.substring(3)}`;
    }
  };

  useEffect(() => {
    const dataFilteredPerDays = getDaysWeather();
    setDataFiltered(dataFilteredPerDays);
  }, [data]);

  return (
    <article
      className={`${style.cardLastDays} mt-5 flex w-full flex-col items-center 2xl:w-3/4`}
    >
      <h3 className="mt-4 text-5xl font-bold text-white underline">
        Next five days
      </h3>
      {dataFiltered.map((weatherHourly) => (
        <ItemsDays
          key={weatherHourly.dt_txt}
          name={weatherHourly.weather[0].main}
          date={formatDate(weatherHourly.dt_txt)}
          description={weatherHourly.weather[0].description}
        />
      ))}
    </article>
  );
}

export default index;
