const config = require("../Config/config.json");
const Utilisateur = require('../Models/Utilisateur');
const jwt = require("jsonwebtoken");
const Profile = require("../Models/profile");

class AuthenticateService {
    async register(frontData){
        const userData = {
            UT_Email: frontData.UT_Email,
            UT_Motdepasse: frontData.UT_Motdepasse,
            UT_Prenom: frontData.UT_Prenom,
            UT_Nom: frontData.UT_Nom,
            UT_Ville: frontData.UT_Ville,
            UT_Codepostal: frontData.UT_Codepostal
        }
        const utilisateur = await Utilisateur.create(userData);


        const profileData = {
            UT_ID: utilisateur.UT_ID,
            PR_Tennisniveau: frontData.PR_Tennisniveau,
            PR_Padelniveau: frontData.PR_Padelniveau,
            PR_Description: frontData.PR_Description
        }
        const profile = await Profile.create(profileData)
        return "Inscription Réussi !"
    }

    async login (email, password){
        const utilisateur = await Utilisateur.findOne({where : {UT_Email : email}})
        if (!utilisateur || !await utilisateur.ValidatePassword(password)){
            throw new Error("Mot de passe ou email incorrect")
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