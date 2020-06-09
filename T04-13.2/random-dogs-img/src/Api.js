const URL = 'https://dog.ceo/api/breeds/image/random';

const fetchApi = () => fetch(URL).then((response) => (
    response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
));

export default fetchApi;