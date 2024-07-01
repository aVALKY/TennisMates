const AuthenticateService = require("../Services/AuthenticateService");
const config = require('../Config/config.json');
const jwt = require('jsonwebtoken');


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
            const token = await AuthenticateService.login(email, password);
            result.json({token : token}) 
        } catch (error) {
            result.status(401) // non autorisé 
            result.json({error : "Mot de passe ou email inccorect"})
        }
    }

    authenticateToken(request, result, next) {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            result.status(401) // non autorisé
            return result.json({error : "Vous n'avez pas accès à cette route"})
        }

        jwt.verify(token, config.SECRET , (error, user) => {
            if (error) {
                result.status(401)
                return result.json({error : "Votre token n'est pas valide"});
            }
            request.user = user;
            next();
        })
    }
}

module.exports = new AuthenticateController();