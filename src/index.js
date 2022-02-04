// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const card = require('./data/card.json');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: '5mb',
  })
);
//Motor de plantillas
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL: 'https://awesome-profile-cards.heroku.app.com/card/{id}',
  };

  const responseError = {
    success: false,
    error: 'Error description',
  };

  if (req.body.name !== '' && req.body.job !== '') {
    savedCards.push(req.body);
    res.json(responseSuccess);
  } else {
    res.json(responseError);
  }
});

//URL params
server.get('/card/:id', (req, res) => {
  const requestParamsId = req.params.id;
  const cardData = card.find((card) => card.id === requestParamsId);
  res.render('card', cardData);
  console, console.log(cardData);
});
