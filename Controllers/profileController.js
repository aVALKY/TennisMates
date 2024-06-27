const profileService = require('../Services/profileService');
const ProfileService = require ('../Services/profileService');

class ProfileController{

    async getProfileByID(request, result){
        try {
            const profile = await ProfileService.getProfileById(request.params.id);
            result.json(profile)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du profile"});
        }
    }

    async addProfile (request, result){
        try {
            const profile = await ProfileService.addProfile(request.body);
            result.json(profile)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout du profile"})
        }
    }

    async removeProfile (request, result) {
        try {
            const profile = await ProfileService.removeProfile(request.params.id);
            result.json({message : "Le profile a bien été surpprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression du profile"})
        }
    }

    async updateProfile (request, result) {
        try {
            const profile = await ProfileService.updateProfile(request.params.id, request.body);
            result.json (profile);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification du profile"})
        }
    }

}

module.exports = new ProfileController();


