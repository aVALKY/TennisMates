const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");


class Utilisateur extends Model {

}

Utilisateur.init({
    UT_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UT_Motdepasse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UT_Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UT_Prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UT_Nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UT_Ville: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UT_Codepostal: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Utilisateur',
    tableName: 'utilisateurs',
    timestamps: false // pas besoin des champs `createdAt` et `updatedAt`
});

module.exports = Utilisateur;