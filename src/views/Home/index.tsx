import React, { useEffect } from "react";
import Nav from "../../Components/Nav/index";
import MainContainer from "../../Components/MainContainer";
import style from "./style.module.css";
import CityNameContainer from "./Components/CityNameContainer";
import LastSevenDays from "./Components/LastFiveDaysContainer";
import DescriptionContainer from "./Components/DescriptionContainer";
import SunLocationContainer from "./Components/SunLocationContainer";
import HourlyWeatherContainer from "./Components/HourlyWeatherContainer";
import AirPolution from "./Components/AirPolutionContainer";
import HistorySearchContainer from "./Components/HistorySearchContainer";
import Loader from "./Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { searchCityClimate } from "../../redux/dataSlice";
import { searchHistory } from "../../redux/historySearchSlice";

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [problem, setProblem] = React.useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(searchCityClimate({ lat: 40.4167047, lon: -3.7035825 }));
    dispatch(searchHistory());
    setTimeout(() => {
      if (!data) {
        setError("Its been a problem with the server, please try later.");
        setProblem(true);
      }
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <MainContainer>
        <>
          {problem && (
            <section
              className={`${style.cardsSection} flex flex-col items-center justify-center bg-second-color p-10`}
            >
              <h2 className="text-5xl font-bold text-white">{`${error}`}</h2>
            </section>
          )}
          {!loading && (
            <section
              className={`${style.cardsSection} flex flex-col bg-second-color p-10 sm:flex-row`}
            >
              <div className="mr-2 flex h-auto w-full flex-col lg:w-2/5 2xl:items-center">
                <CityNameContainer />
                <LastSevenDays />
              </div>
              <div className="flex h-auto w-full flex-col items-center">
                <DescriptionContainer />
                <HourlyWeatherContainer />
                <SunLocationContainer />
                <AirPolution />
                <HistorySearchContainer />
              </div>
            </section>
          )}
        </>
      </MainContainer>
      {loading && <Loader />}
      <footer></footer>
    </>
  );
};

export default Home;
