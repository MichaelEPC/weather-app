import React, { useEffect } from "react";
import style from "./style.module.css";
import CityItems from "./Components/CityItems";
import { searchHistory } from "../../../../redux/historySearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchCityClimate } from "../../../../redux/dataSlice";

interface History {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

function Index() {
  const dispatch = useDispatch();
  const searchHistoryState = useSelector(
    (state: any) => state.history.searchHistory,
  );
  const data = useSelector((state: any) => state.data.data);

  const changePlaceinfo = (lat: number, lon: number): void => {
    dispatch(
      searchCityClimate({
        lat: lat,
        lon: lon,
      }),
    );
  };

  useEffect(() => {
    dispatch(searchHistory());
  }, [dispatch]);

  return (
    <div className="mt-10 h-auto w-full">
      <h2 className="text-4xl font-bold text-white">
        Latest city that you have been looking for...
      </h2>
      <div className="flex w-full flex-col items-center xl:flex-row">
        {!searchHistoryState?.length && (
          <h4 className="mt-1 text-3xl font-semibold text-white">
            No results, please look for more cities
          </h4>
        )}
        {searchHistoryState?.map((history: History) => (
          <CityItems
            key={history.lat}
            city={history.name}
            country={history.country}
            lat={history.lat}
            lon={history.lon}
            changePlaceinfo={changePlaceinfo}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
