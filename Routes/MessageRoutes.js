const express = require ('express');
const MessageController = require ('../Controllers/MessageController');

const router = express.Router();

router.get('/:ID_Envoyeur/:ID_Receveur', (request , result) => MessageController.getAllMessageForOneConv(request, result));
router.get('/:id',(request, result) => MessageController.getMessageById(request, result));
router.post('/', (request, result) => MessageController.addMessage (request, result));
router.delete('/:id', (request, result) => MessageController.removeMessage(request, result));
router.patch('/:id', (request, result) => MessageController.updateMessage(request, result));

module.exports = router;