const express = require('express');
const ProfileController = require('../Controllers/ProfileController');
const AuthenticateController = require('../Controllers/AuthenticateController');
const router = express.Router();

router.get('/:id', AuthenticateController.authenticateToken, (request, result) => ProfileController.getProfileByID(request, result));
router.post('/', AuthenticateController.authenticateToken, (request, result) => ProfileController.addProfile(request, result));
router.delete('/:id', AuthenticateController.authenticateToken, (request, result) => ProfileController.removeProfile(request, result));
router.patch('/:id', AuthenticateController.authenticateToken, (request, result) => ProfileController.updateProfile(request, result));

module.exports = router;
