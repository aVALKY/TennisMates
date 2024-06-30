const express = require('express');
const UtilisateurController = require('../Controllers/UtilisateurController');
const router = express.Router();

router.get('/', (request, result) => UtilisateurController.getAllUtilisateur(request, result));
router.get('/:id', (request, result) => UtilisateurController.getUtilisateurById(request, result));
router.delete('/:id', (request, result) => UtilisateurController.removeUtilisateur(request, result));
router.patch('/:id', (request, result) => UtilisateurController.updateUtilisateur(request, result));

module.exports = router;