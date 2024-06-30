const express = require ('express');
const AuthenticateController = require ('../Controllers/AuthenticateController');
const router = express.Router();


router.post('/login', (request, result) => AuthenticateController.login(request, result));
router.post('/register', (request, result) => AuthenticateController.register(request, result));

module.exports = router; 