const config = require("../Config/config.json");
const Utilisateur = require('../Models/Utilisateur');
const jwt = require("jsonwebtoken")

class AuthenticateService {
    async register(UtilisateurData){
        const utilisateur = await Utilisateur.create(UtilisateurData);
        return this.generateToken(utilisateur);
    }

    async login (email, password){
        const utilisateur = await Utilisateur.findOne({where : {UT_Email : email}})
        if (!utilisateur || !await utilisateur.ValidatePassword(password)){
            throw new Error("Email ou motdepasse n'est pas correct")
        }
        return this.generateToken(utilisateur);
    }

    generateToken (utilisateur) {
        const payload = {
            id: utilisateur.UT_ID,
            email: utilisateur.UT_Email
        }
        return jwt.sign(payload, config.SECRET, {expiresIn: '2h'})
    }

}

module.exports = new AuthenticateService();