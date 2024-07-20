export const fetchHistory = async () => {
  const res = await JSON.parse(localStorage.getItem("searchHistoryClmap"));
  return res;
};
