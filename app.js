const express = require('express');
const app = express();
const bd = require('./utils/db');

// Conecta a la base de datos
bd.connect();

const puerto = 3030;
app.use(express.json());
require('./routes/festivos')(app);

app.listen(puerto, () => {
  console.log(`Servicio iniciado a través de la url http://localhost:${puerto}`);
});
