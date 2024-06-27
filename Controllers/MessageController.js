const Message = require ('../Models/Message');
const MessageService = require ('../Services/MessageService');

class MessageController {

    async getAllMessageForOneConv (request, result) {
        try {
            const message = await MessageService.getAllMessageForOneConv(request.params.ID_Receveur , request.params.ID_Envoyeur);
            result.json(message)
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json ({error : "Une erreur est survenue lors de la récupération des messages"})
        }
    }

}

module.exports = new MessageController();