export function filterData(searchInput, allRestaurents) {
  const filterData = allRestaurents.filter((restaurent) => {
    return restaurent?.data?.name
      .toLowerCase()
      ?.includes(searchInput.toLowerCase());
  });
  return filterData;
}
