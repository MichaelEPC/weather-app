import React, { useEffect } from "react";
import SearchItems from "./Components/SearchItems";
import icon from "../../assets/logo-transparent-svg.svg";
import style from "./style.module.css";
import { searchCityClimate } from "../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "./fetchSearchResults";
import { addSearch } from "./addSearchLog";

const index = () => {
  const [cityValue, setCityValue] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [noResults, setNoResults] = React.useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  const handleSubmit = (
    lat: number,
    lon: number,
    name: string,
    country: string,
  ) => {
    setCityValue("");
    dispatch(
      searchCityClimate({
        lat: lat,
        lon: lon,
      }),
    );
    addSearch(name, country, lat, lon);
  };

  const handleChange = async (event) => {
    setCityValue(event.target.value);
    setLoading(true);
    const res = await fetchSearchResults(cityValue);
    if (res == null) {
      setNoResults(true);
      setLoading(false);
    } else {
      setResults(res);
      setNoResults(false);
      setLoading(false);
    }
  };

  console.log(data);
  return (
    <nav className="relative flex h-32 w-full items-center justify-between bg-principal-color">
      <figure className="ml-2 w-32 cursor-pointer">
        <img src={icon} alt={icon} />
      </figure>
      <ul className="flex h-auto w-3/4 justify-around md:w-2/4 lg:w-1/3 2xl:w-1/4">
        <li className="flex items-center justify-center">
          <input
            className="h-12 w-52 rounded-l-2xl border-2 border-ligh-gray p-2 text-2xl text-text-color outline-none sm:w-80"
            type="text"
            onChange={(event) => handleChange(event)}
            placeholder="Name of the city"
          />
          <div
            className={`${style.itemsBackGround} itemsNavContainer cursor-pointer rounded-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className={`fill-white transition-all duration-200 ${style.glasses}`}
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </div>
        </li>
        <li
          className={`bottomLine relative flex cursor-pointer items-center justify-center transition-all ${style.bottomLine}`}
        >
          <p className={`text-3xl font-semibold text-white ${style.navText}`}>
            Contact
          </p>
        </li>
        <li
          className={`bottomLine relative flex cursor-pointer items-center justify-center transition-all duration-200`}
        >
          <p
            className={`text-3xl font-semibold text-white transition-all ${style.navText}`}
          >
            FAQ
          </p>
        </li>
      </ul>
      <div
        className={`${cityValue == "" ? "hidden" : "w-3/5"} absolute right-0 top-32 z-40 flex h-auto flex-col rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md`}
      >
        {noResults && <h3>No results...</h3>}
        {!loading &&
          !noResults &&
          results?.map((result) => (
            <SearchItems
              key={result.state}
              name={result.name}
              country={result.country}
              state={result.state}
              lat={result.lat}
              lon={result.lon}
              handleSubmit={handleSubmit}
            />
          ))}
      </div>
    </nav>
  );
};

export default index;
