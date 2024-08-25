const AuthenticateService = require("../Services/AuthenticateService");
const config = require('../Config/config.json');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../Models/Utilisateur');

class AuthenticateController {

    async register(request, result) {
        try {
            const utilisateur = await AuthenticateService.register(request.body);
            result.json({ utilisateur: utilisateur, message: "Inscription réussie !" });
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de l'inscription" });
        }
    }

    async login(request, result) {
        try {
            const { UT_Email, UT_Motdepasse } = request.body;

            const utilisateur = await Utilisateur.findOne({ 
                where: { UT_Email },
                attributes: ['UT_ID', 'UT_Prenom', 'UT_Nom', 'UT_Email', 'UT_Motdepasse'] // Inclut UT_Motdepasse pour la validation
            });

            if (!utilisateur) {
                return result.status(401).json({ error: "Mot de passe ou email incorrect" });
            }


            const isPasswordValid = await utilisateur.ValidatePassword(UT_Motdepasse);
            if (!isPasswordValid) {
                return result.status(401).json({ error: "Mot de passe ou email incorrect" });
            }

            const token = await AuthenticateService.login(UT_Email, UT_Motdepasse);

            result.json({ token: token, utilisateur: utilisateur }); // Renvoyer le token et les infos utilisateur
        } catch (error) {
            result.status(401);
            result.json({ error: "Mot de passe ou email incorrect" });
        }
    }

    authenticateToken(request, result, next) {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            result.status(401);
            return result.json({ error: "Vous n'avez pas accès à cette route" });
        }

        jwt.verify(token, config.SECRET, (error, user) => {
            if (error) {
                console.log("Token invalide :", error);
                result.status(401);
                return result.json({ error: "Votre token n'est pas valide" });
            }
            request.user = user;
            next();
        });
    }
}

module.exports = new AuthenticateController();

