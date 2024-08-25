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

    async getMessageById(request, result){
        try {
            const message = await MessageService.getMessageById(request.params.id);
            result.json(message)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du message"})
        }
    }

    async addMessage (request, result) {
        try {
            const message = await MessageService.addMessage(request.body);
            result.json(message);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est surevenue lors de l'insertion du message"})
        }
    }



}

module.exports = new MessageController();