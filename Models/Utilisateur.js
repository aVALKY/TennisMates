const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const bcrypt = require('bcrypt');
const Profile = require("./profile");

class Utilisateur extends Model {
    async ValidatePassword(password) {
        return await bcrypt.compare(password, this.UT_Motdepasse);
    }
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
    timestamps: false,
    hooks: {
        beforeCreate: async (utilisateur) => {
            utilisateur.UT_Motdepasse = await bcrypt.hash(utilisateur.UT_Motdepasse, 10);
        },
        beforeUpdate: async (utilisateur) => {
            if (utilisateur.changed('UT_Motdepasse')) {
                utilisateur.UT_Motdepasse = await bcrypt.hash(utilisateur.UT_Motdepasse, 10);
            }
        }
    }
});

Utilisateur.belongsTo(Profile,{as:'Profile', foreignKey: "UT_ID"})
Profile.belongsTo(Utilisateur,{as:'Utilisateur', foreignKey: "UT_ID"})

module.exports = Utilisateur;
