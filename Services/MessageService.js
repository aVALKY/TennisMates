const { QueryTypes } = require('sequelize');
const Message = require ('../Models/Message');

class MessageService {


    async getAllMessageForOneConv(envoyeur, receveur)  { 
        return await Message.sequelize.query('select * from messages where (ME_Envoyeur = :ID_Envoyeur AND ME_Receveur = :ID_Receveur) OR (ME_Envoyeur = :ID_Receveur AND ME_Receveur = :ID_Envoyeur) ',
            {
                type : QueryTypes.SELECT, 
                replacements : {ID_Envoyeur : envoyeur , ID_Receveur : receveur}
            }
        );
    }

    async getMessageById(message) {
        return await Message.findByPk(message)
    }

    async addMessage(message){
        return await Message.create(message)
    }

}

module.exports = new MessageService();