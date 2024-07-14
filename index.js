const express = require('express');
const cors = require('cors')
const app = express();

const utilisateurRouter = require('./Routes/UtilisateurRoutes');
const profileRouter = require('./Routes/ProfileRoutes');
const messageRouter = require('./Routes/MessageRoutes');
const AuthenticateRoutes = require('./Routes/AuthenticateRoutes');
const AuthenticateController = require('./Controllers/AuthenticateController');


app.use(express.json());
app.use(cors());

app.use('/authenticate', AuthenticateRoutes);
app.use('/utilisateurs',  utilisateurRouter);
app.use('/profiles',  AuthenticateController.authenticateToken,  profileRouter);
app.use('/messages',  AuthenticateController.authenticateToken,  messageRouter)

module.exports = app;
