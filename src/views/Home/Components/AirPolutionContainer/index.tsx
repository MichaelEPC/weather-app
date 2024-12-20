import React, { useEffect } from "react";
import style from "./style.module.css";
import ItemsAirPulution from "./Components/ItemsAirPolution";
import { useSelector } from "react-redux";

function index() {
  const data = useSelector(
    // @ts-ignore
    (state) => state.data.data.airPol.list[0].components,
  );
  const [listResult, setListResult] = React.useState([]);

  useEffect(() => {
    setListResult([
      { name: "co", quantitive: parseFloat(data.co) },
      { name: "no", quantitive: parseFloat(data.no) },
      { name: "no2", quantitive: parseFloat(data.no2) },
      { name: "o3", quantitive: parseFloat(data.o3) },
      { name: "pm2_5", quantitive: parseFloat(data.pm2_5) },
      { name: "pm10", quantitive: parseFloat(data.pm10) },
      { name: "so2", quantitive: parseFloat(data.so2) },
    ]);
  }, [data]);

  return (
    <article
      className={`${style.cardAirPolution} mt-4 flex w-full flex-col items-center 2xl:w-3/4`}
    >
      <div className="flex items-center">
        <svg className="h-32 fill-green-light" viewBox="0 0 30 30">
          <path d="M4.65 15.5c0-.22.08-.41.23-.56a.8.8 0 01.57-.22h12.08c.22 0 .4.07.54.22s.22.34.22.57c0 .22-.07.4-.22.54-.14.14-.32.22-.54.22H5.45c-.22 0-.42-.07-.57-.22a.711.711 0 01-.23-.55zm2.41-2.9c0-.22.08-.4.23-.55a.77.77 0 01.56-.23h12.09c.21 0 .39.08.54.23.15.15.22.33.22.55 0 .22-.07.4-.22.56-.15.15-.33.23-.54.23H7.86c-.22 0-.41-.08-.56-.23s-.24-.34-.24-.56zm1.62 5.74c0-.21.08-.39.24-.54.14-.14.32-.22.54-.22h12.1c.22 0 .41.07.56.22.15.14.22.32.22.54s-.08.41-.23.56-.34.23-.56.23H9.46c-.22 0-.4-.08-.56-.23s-.22-.34-.22-.56zm10.58-2.84c0-.23.07-.42.22-.57.15-.15.34-.22.57-.22h4.52c.23 0 .42.07.57.22.15.15.22.34.22.56 0 .22-.07.4-.22.54s-.34.22-.56.22h-4.52c-.23 0-.42-.07-.57-.22-.16-.13-.23-.31-.23-.53z" />
        </svg>
        <h3 className="text-5xl font-bold text-white">Air Polution</h3>
      </div>

      <div className="flex w-full flex-col items-center justify-around lg:w-5/6 xl:flex-row">
        {listResult.map((components) => (
          <ItemsAirPulution
            key={components.name}
            name={components.name}
            quantitive={components.quantitive}
          />
        ))}
      </div>
    </article>
  );
}

export default index;
