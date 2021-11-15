/**
 * the same as in callback/challenge but here we are using async/await
 *
 * in this case we have avoided the callback hell 🎉
 */
const fetchData = require('./../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log('before');
anotherFunction(API);
console.log('After');

/**
 * In case of making many async call at the same time promises can be used
 * 
 *
 * async function foo() {
	const [characters , episodes, locations] = await Promise.all([
		getCharacters(),
		getEpisodes(),
		getLocations(),
	])

	console.log(characters)
	console.log(episodes)
	console.log(locations)
}
 * 
 */
