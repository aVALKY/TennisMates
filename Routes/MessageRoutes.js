const express = require ('express');
const MessageController = require ('../Controllers/MessageController');

const router = express.Router();

router.get('/:ID_Envoyeur/:ID_Receveur', (request , result) => MessageController.getAllMessageForOneConv(request, result));


module.exports = router;