const Utilisateur = require('../Models/Utilisateur');
const Profile = require('../Models/profile');
const UtilisateurService = require ('../Services/UtilisateurService');

class UtilisateurController {

    async getAllUtilisateur(request, result) {
        try {
            const utilisateur = await UtilisateurService.getAllUtilisateur();
            result.json(utilisateur)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est surevenue lors de la récupération des utilisateurs"});
        } 
    }

    async getUtilisateurById (request, result) {
        try {
            const utilisateur = await UtilisateurService.getUtilisateurById(request.params.id);
            result.json(utilisateur)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de l'utilisateur"});
        }
    }


    async removeUtilisateur(request, result) {
        try {
            await UtilisateurService.removeUtilisateur(request.params.id);
            result.json({message : "L'utilisateur a bien été supprimé"})
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la supression de l'utilisateur"})
        }
    }

    async updateUtilisateur (request, result) {
        try {
            const utilisateur = await  UtilisateurService.updateUtilisateur(request.params.id, request.body);
            result.json(utilisateur);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de l'utilisateur"})
        }
    }

    async getAllUtilisateursAvecProfiles(request, result) {
        try {
            const utilisateurs = await UtilisateurService.getAllUtilisateursAvecProfiles()
            result.json(utilisateurs)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est surevenue lors de la récupération des utilisateurs"});
        } 
    }
    
}

module.exports = new UtilisateurController();