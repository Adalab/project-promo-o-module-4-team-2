const expressServer = 'https://awesome-profile-cards-team-2.herokuapp.com/card';

const dataApi = (data) => {
  return fetch(expressServer, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};
export default dataApi;
