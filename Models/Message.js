const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");


class Message extends Model {

}

Message.init({
    
    ME_ID : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ME_Envoyeur : {
        type: DataTypes.INTEGER, 
        allowNull: true
    },
    ME_Receveur : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ME_contenu : {
        type : DataTypes.INTEGER,
        allowNull: true
    },
    ME_dateEnvoie : {
        type : DataTypes.DATE,
        allowNull: false
    }
}, {

    sequelize,
    modelName : "Message",
    tableName : "messages",
    timestamps: false // pas besoin des champs `createdAt` et `updatedAt`
})

module.exports = Message;