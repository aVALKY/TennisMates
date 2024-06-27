const express = require('express');
const app = express();

const utilisateurRouter = require('./Routes/UtilisateurRoutes');
const profileRouter = require('./Routes/ProfileRoutes');
const messageRouter = require('./Routes/MessageRoutes')


app.use(express.json());

app.use('/utilisateurs', utilisateurRouter);
app.use('/profiles', profileRouter);
app.use('/messages', messageRouter)

module.exports = app;