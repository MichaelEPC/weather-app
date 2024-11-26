import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";

function index() {
  // @ts-ignore
  const data = useSelector((state) => state.data.data.cityInfo);
  return (
    <article
      className={`${style.cardInfo} mt-2 flex w-full flex-col items-center lg:w-3/5 pd:w-full pd:flex-row`}
    >
      <h2 className="mt-4 text-6xl font-semibold text-white pd:hidden">
        Description
      </h2>
      <div className="mt-4 flex h-auto w-full items-center justify-center">
        <svg
          className="fill-green-light"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8.5 12a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8.5 12zm6.993-.014a1.494 1.494 0 1 1 .001-2.987 1.494 1.494 0 0 1-.001 2.987z"></path>
        </svg>
        <p className="text-4xl font-semibold text-white">Feels like:</p>
        <p className="ml-2 text-4xl font-bold text-white">{`${data.main.feels_like.toFixed()}ºC`}</p>
      </div>

      <div className="mt-4 flex h-auto w-full items-center justify-center">
        <svg
          className="fill-green-light lg:h-20 lg:w-20"
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 24 24"
        >
          <path d="M9 16a3.001 3.001 0 0 0 6 0c0-.353-.072-.686-.184-1H9.184A2.962 2.962 0 0 0 9 16z"></path>
          <path d="M18 6V4h-3.185A2.995 2.995 0 0 0 12 2c-1.654 0-3 1.346-3 3v5.8A6.027 6.027 0 0 0 6 16c0 3.309 2.691 6 6 6s6-2.691 6-6a6.027 6.027 0 0 0-3-5.2V10h3V8h-3V6h3zm-4.405 6.324A4.033 4.033 0 0 1 16 16c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.585.944-3.027 2.405-3.676l.595-.263V5a1 1 0 0 1 2 0v7.061l.595.263z"></path>
        </svg>
        <p className="text-4xl font-semibold text-white">
          Min:
          <span className="mr-1 font-bold">{` ${data.main.temp_min.toFixed()}ºC`}</span>
        </p>
        <p className="ml-2 text-4xl font-semibold text-white">
          Max:
          <span className="font-bold">{` ${data.main.temp_max.toFixed()}ºC`}</span>
        </p>
      </div>

      <div className="mt-4 flex h-auto w-full items-center justify-center">
        <svg
          className="fill-green-light"
          viewBox="0 0 30 30"
          fill="currentColor"
          width="52"
          height="52"
        >
          <path d="M7.69 13.2c0-.99.19-1.94.58-2.85.39-.91.91-1.68 1.57-2.33s1.44-1.17 2.34-1.56c.9-.39 1.85-.58 2.84-.58.99 0 1.94.19 2.85.58.9.39 1.68.91 2.33 1.56.65.65 1.17 1.43 1.56 2.33s.58 1.85.58 2.85c0 1.62-.48 3.06-1.44 4.34a7.247 7.247 0 01-3.71 2.61v3.29h-4.24v-3.25c-1.54-.45-2.81-1.32-3.79-2.61s-1.47-2.75-1.47-4.38zm1.61 0c0 1.55.56 2.88 1.69 3.99 1.11 1.12 2.45 1.68 4.02 1.68 1.03 0 1.99-.25 2.86-.76a5.76 5.76 0 002.09-2.07c.51-.87.77-1.82.77-2.85 0-.77-.15-1.5-.45-2.21s-.71-1.31-1.22-1.82-1.12-.92-1.83-1.22a5.6 5.6 0 00-2.21-.45c-.77 0-1.5.15-2.21.45a5.651 5.651 0 00-3.04 3.04c-.32.72-.47 1.45-.47 2.22zm.58.36v-.72h2.17v.72H9.88zm1.09-3.54l.52-.52 1.52 1.52-.52.53-1.52-1.53zm2.53 4.93c0-.42.15-.78.44-1.09.29-.31.65-.47 1.06-.48l2.73-4.49.66.35-2.02 4.83c.18.25.26.54.26.88 0 .44-.15.81-.46 1.11-.31.3-.68.45-1.12.45-.43 0-.8-.15-1.1-.45-.3-.3-.45-.67-.45-1.11zm1.31-4.67V8.12h.69v2.17h-.69zm2.94 3.27v-.74h2.17v.74h-2.17z" />
        </svg>
        <p className="text-4xl font-semibold text-white">
          Pressure:
          <span className="font-bold">{` ${data.main.pressure}`}</span>
        </p>
      </div>

      <div className="mt-4 flex h-auto w-full items-center justify-center">
        <svg
          className="fill-green-light"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M5.996 9c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707C11.83 8.253 12.577 9 13.991 9c1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 8.253 20.585 9 22 9V7c-.563 0-.804-.217-1.295-.707C20.159 5.747 19.411 5 17.996 5s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 5.747 11.407 5 9.993 5s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 5.747 3.413 5 2 5v2c.561 0 .801.217 1.291.707C3.836 8.253 4.583 9 5.996 9zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 13.253 20.585 14 22 14v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 10.747 11.407 10 9.993 10s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 10.747 3.413 10 2 10v2c.561 0 .801.217 1.291.707C3.836 13.253 4.583 14 5.996 14zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 18.253 20.585 19 22 19v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 15.747 11.407 15 9.993 15s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 15.747 3.413 15 2 15v2c.561 0 .801.217 1.291.707C3.836 18.253 4.583 19 5.996 19z"></path>
        </svg>
        <p className="text-4xl font-semibold text-white">
          Humidity:
          <span className="font-bold">{` ${data.main.humidity}%`}</span>
        </p>
      </div>

      <div className="mt-4 flex h-auto w-full items-center justify-center">
        <svg
          className="fill-green-light"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1 .827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zm2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path>
          <path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4zM2 15h4v2H2z"></path>
        </svg>
        <p className="text-4xl font-semibold text-white">{`Wind: ${data.wind.speed}KM/H`}</p>
      </div>
    </article>
  );
}

export default index;
