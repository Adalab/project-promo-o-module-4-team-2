// Fichero src/index.js

// importamos uuid
const { v4: uuidv4 } = require('uuid');

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

//Configuramos sevidor static css
const staticServerCss = './src/static/styles';
server.use(express.static(staticServerCss));

//Motor de plantillas
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000; /*process.env.PORT ? process.env.PORT :*/
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  const newCardData = { ...req.body, id: uuidv4() };
  savedCards.push(newCardData);
  const responseSuccess = {
    success: true,
    cardURL: `http://localhost:4000/card/${newCardData.id}`,
  };

  const responseError = {
    success: false,
    error: 'Error description',
  };

  if (req.body.name !== '' && req.body.job !== '') {
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
