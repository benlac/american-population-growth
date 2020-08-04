/**
 * Search a city in search bar
 * @param {cities} array array of cities
 * @param {searchValue} string search of user
 * @return {array} filtered city
 */
export const findCities = (cities, searchValue) => {
  if(searchValue !== '') {
    return cities.filter((city) => city.city.toLowerCase().includes(searchValue.toLowerCase().trim()));
  }
  return cities;
}