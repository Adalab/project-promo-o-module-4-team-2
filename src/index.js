// Fichero src/index.js

// importamos uuid
const { v4: uuidv4 } = require('uuid');

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const card = require('./data/card.json');

const Database = require('better-sqlite3');
const db = new Database('./src/data/database.db', {
  // con verbose le decimos que muestre en la consola todas las queries que se ejecuten
  verbose: console.log,
  // así podemos comprobar qué queries estamos haciendo en todo momento
});

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
const serverPort = process.env.PORT ? process.env.PORT : 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  const newCardData = { ...req.body, id: uuidv4() };
  console.log(newCardData);
  if (
    req.body.name !== '' &&
    req.body.job !== '' &&
    req.body.email !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== ''
  ) {
    const insertStmt = db.prepare(
      'INSERT INTO cards (uuid, palette, name, job, phone, email, github, linkedin, photo) VALUES (?,?,?,?,?,?,?,?,?)'
    );
    insertStmt.run(
      newCardData.id,
      newCardData.palette,
      newCardData.name,
      newCardData.job,
      newCardData.phone,
      newCardData.email,
      newCardData.github,
      newCardData.linkedin,
      newCardData.photo
    );
    const responseSuccess = {
      success: true,
      cardURL: `https://awesome-profile-cards-team-2.herokuapp.com/card/${newCardData.id}`,
    };

    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: 'Error description',
    };
    res.json(responseError);
  }
});

//URL params
server.get('/card/:id', (req, res) => {
  const queryStmt = db.prepare('SELECT * FROM cards WHERE uuid = ?');
  const userCard = queryStmt.get(req.params.id);
  res.render('card', userCard);
});

//Servidor de estaticos
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));
