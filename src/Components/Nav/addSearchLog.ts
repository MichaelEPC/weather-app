export const addSearch = (
  name: string,
  country: string,
  lat: number,
  lon: number,
) => {
  let res = JSON.parse(localStorage.getItem("searchHistoryClmap"));
  if (res === undefined || res == null) {
    res = [];
    res.unshift({
      name,
      country,
      lat,
      lon,
    });
    localStorage.setItem("searchHistoryClmap", JSON.stringify(res));
    return;
  }
  res.forEach((element) => {
    if (lat == element.lat && lon == element.lon) {
      return;
    }
  });
  res.unshift({
    name,
    country,
    lat,
    lon,
  });
  if (res.length >= 5) {
    res.pop();
  }
  localStorage.setItem("searchHistoryClmap", JSON.stringify(res));
  return;
};
