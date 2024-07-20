import React, { useEffect } from "react";
import style from "./style.module.css";
import CityItems from "./Components/CityItems";
import { searchHistory } from "../../../../redux/historySearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchCityClimate } from "../../../../redux/dataSlice";

function index() {
  const dispatch = useDispatch();
  const searchHistoryState = useSelector(
    (state) => state.history.searchHistory,
  );
  const data = useSelector((state) => state.data.data);

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
  }, [data]);

  return (
    <div className="mt-10 h-auto w-full">
      <h2 className="text-4xl font-bold text-green-light">
        Latest city that you have been locking...
      </h2>
      <div className="flex w-full flex-col items-center xl:flex-row">
        {searchHistoryState == undefined && (
          <h4 className="mt-1 text-3xl font-semibold text-white">
            No results, please look more citys
          </h4>
        )}
        {searchHistoryState?.length === 0 && (
          <h4 className="font-semibold text-white">No results</h4>
        )}
        {searchHistoryState?.map((history) => (
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

export default index;
