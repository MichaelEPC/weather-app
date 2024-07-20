import React from "react";
import style from "./style.module.css";
import sunRiseIMG from "../../../../assets/sunrise.png";
import sunsetIMG from "../../../../assets/sunset.png";
import { useSelector } from "react-redux";

function index() {
  const data = useSelector((state) => state.data.data.cityInfo.sys);
  const convertTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  };

  const divideTime = (time) => {
    if (parseFloat(time.substring(0, 3)) >= 12) {
      return `${time} PM`;
    } else {
      return `${time} AM`;
    }
  };

  return (
    <article
      className={`${style.cardOtherInfo} mt-2 flex h-auto w-full flex-col items-center xl:w-3/5`}
    >
      <div className="mt-2 flex h-auto w-full items-center justify-center">
        <svg
          className="fill-green-light"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
          <path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z"></path>
        </svg>
        <h3 className="text-5xl font-bold text-white">Sun time</h3>
      </div>
      <div className="l mt-2 flex h-auto w-4/6 flex-col items-center justify-center lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center justify-center lg:mr-10">
          <h3 className="mt-1 text-5xl font-semibold text-white">Sunrise</h3>
          <figure className="mt-4">
            <img src={sunRiseIMG} alt={sunRiseIMG} />
          </figure>
          <p className="mt-4 text-4xl font-bold text-white underline">{`${divideTime(convertTimestampToDate(data.sunrise).substring(10, 16))}`}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="mt-1 text-5xl font-semibold text-white">Sunset</h3>
          <figure className="mt-4">
            <img src={sunsetIMG} alt={sunsetIMG} />
          </figure>
          <p className="mt-4 text-4xl font-bold text-white underline">{`${divideTime(convertTimestampToDate(data.sunset).substring(10, 16))}`}</p>
        </div>
      </div>
    </article>
  );
}

export default index;
