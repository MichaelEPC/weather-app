export const fetchData = async (lat: number, lon: number) => {
  try {
    let firstSearch = await fetch(
      `${import.meta.env.VITE_API_URL}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
    );
    if (!firstSearch.ok) {
      return null;
    }
    firstSearch = await firstSearch.json();

    let secondSearch = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
    );
    if (!secondSearch.ok) {
      return null;
    }
    secondSearch = await secondSearch.json();

    let thirdSearch = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
    );
    if (!thirdSearch.ok) {
      return null;
    }
    thirdSearch = await thirdSearch.json();

    const resObject = {
      cityInfo: firstSearch,
      hourlyForeCast: secondSearch,
      airPol: thirdSearch,
    };
    return resObject;
  } catch (error) {
    return error;
  }
};
