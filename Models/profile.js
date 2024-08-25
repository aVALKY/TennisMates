const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Utilisateur = require('./Utilisateur');

class Profile extends Model {}

Profile.init({
    PR_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UT_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: Utilisateur,
            key: 'UT_ID',
        },
    },
    PR_Genre: {
        type: DataTypes.ENUM('Homme', 'Femme', 'both'),
        allowNull: true,
    },
    PR_Tennisniveau: {
        type: DataTypes.ENUM('Débutant', 'Intermédiaire', 'Expert'),
        allowNull: false,
    },
    PR_Padelniveau: {
        type: DataTypes.ENUM('Débutant', 'Intermédiaire', 'Expert'),
        allowNull: false,
    },
    PR_Pratique: {
        type: DataTypes.ENUM('Tennis', 'Padel', 'Both'),
        allowNull: true,
    },
    PR_Description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles',
    timestamps: false,
});


module.exports = Profile;
