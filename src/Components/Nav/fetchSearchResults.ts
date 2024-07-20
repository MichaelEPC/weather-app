export const fetchSearchResults = async (searchValue: string) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=10&appid=48ab27d5d88dc04976a0925108ac44e5`,
    );
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};
