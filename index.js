const express = require('express');
const app = express();

const utilisateurRouter = require('./Routes/UtilisateurRoutes');
const profileRouter = require('./Routes/ProfileRoutes');


app.use(express.json());

app.use('/utilisateurs', utilisateurRouter);
app.use('/profiles', profileRouter);

module.exports = app;