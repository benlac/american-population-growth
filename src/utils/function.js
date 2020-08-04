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

/**
 * Find a marker position
 * @param {cities} array array of cities
 * @param {currentCity} string current city in the state
 * @return {array} array of position
 */
export const findMarker = (cities, currentCity ) => {
  if(currentCity){
    let city = cities.find(city => city.city === currentCity);
    return [city.latitude, city.longitude];
  }
  return null;
}

/**
 * Find value of current city
 * @param {cities} array array of cities
 * @param {currentCity} string current city in the state
 * @return {array} array of position
 */
export const findCurrentCityValue = (cities, currentCity ) => {
  return currentCity ? cities.find((city) => city.city === currentCity) : null;
}