const { QueryTypes } = require('sequelize');
const Utilisateur = require('../Models/Utilisateur');
const Profile = require('../Models/profile');

class UtilisateurService {
    
    async getAllUtilisateur() {
        return await Utilisateur.findAll();
    }

    async getUtilisateurById(UtilisateurID) {
        return await Utilisateur.findByPk(UtilisateurID);
    }

    async removeUtilisateur(utilisateurID) {
        return await Utilisateur.destroy({
            where: { UT_ID: utilisateurID }
        });
    }

    async updateUtilisateur(utilisateurID, utilisateur) {
        return await Utilisateur.update(utilisateur, {
            where: { UT_ID: utilisateurID },
            individualHooks: true
        });
    }

    async getAllUtilisateursAvecProfiles() {
        try {
            const utilisateurs = await Utilisateur.findAll({
                include: ['Profile'],
            });
            return utilisateurs;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UtilisateurService();
