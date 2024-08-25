const express = require ('express');
const MessageController = require ('../Controllers/MessageController');

const router = express.Router();

router.get('/:ID_Envoyeur/:ID_Receveur', (request , result) => MessageController.getAllMessageForOneConv(request, result));
router.get('/:id',(request, result) => MessageController.getMessageById(request, result));
router.post('/', (request, result) => MessageController.addMessage (request, result));

module.exports = router;