const AuthenticateService = require("../Services/AuthenticateService");
const config = require('../Config/config.json');


class AuthenticateController{

    async register (request, result){
        try {
            const utilisateur = await AuthenticateService.register(request.body);
            result.json({utilisateur : utilisateur, message : "Inscription Succès"})
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenu lors de l'inscription"})
        }
    }

    async login (request, result) {
        try {
            const {email, password} = request.body;
            const connexion = await AuthenticateService.login(email, password);
            result.json({connexion : connexion}) 
        } catch (error) {
            result.status(401) // non autorisé 
            result.json({error : "Mot de passe ou email inccorect"})
        }
    }

}

module.exports = new AuthenticateController();