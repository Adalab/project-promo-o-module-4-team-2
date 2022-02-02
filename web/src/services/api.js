const expressServer = "http://localhost:4000/card";

const dataApi = (data) => {
  return fetch(expressServer, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};
export default dataApi;

//App.js
// import Api from './...';

// const handleClickBtn = (ev) => {
//   ev.preventDefault();
//   setData(Api());
//   if (data !== '') {
//     <p>'esta es tu url'</p>;
//   }
// };
