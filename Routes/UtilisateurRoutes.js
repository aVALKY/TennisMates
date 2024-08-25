const express = require('express');
const UtilisateurController = require('../Controllers/UtilisateurController');
const AuthenticateController = require('../Controllers/AuthenticateController');
const router = express.Router();

router.get('/', (request, result) => UtilisateurController.getAllUtilisateur(request, result));
router.get('/:id', (request, result) => UtilisateurController.getUtilisateurById(request, result));
router.delete('/:id', AuthenticateController.authenticateToken, (request, result) => UtilisateurController.removeUtilisateur(request, result));
router.patch('/:id', AuthenticateController.authenticateToken, (request, result) => UtilisateurController.updateUtilisateur(request, result));

module.exports = router;