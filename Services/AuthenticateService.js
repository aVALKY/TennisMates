const config = require("../Config/config.json");
const Utilisateur = require('../Models/Utilisateur');

class AuthenticateService {
    async register(UtilisateurData){
        const utilisateur = await Utilisateur.create(UtilisateurData);
        return utilisateur
    }

    async login (email, password){
        const utilisateur = await Utilisateur.findOne({where : {UT_Email : email}})
        if (!utilisateur || !await utilisateur.ValidatePassword(password)){
            throw new Error("Email ou motdepasse n'est pas correct")
        }
    }
}

module.exports = new AuthenticateService();