import { Router } from "express";
import { Route } from ".";
import { userController } from "../controllers/user.controller";
//import { auth } from "../middleware/auth";


export class UserRoute implements Route{
    path = "/users";
    router = Router();
    userCtrl = new userController();

    constructor(){
        this.router
            .post(`${this.path}`,) //Creation d'un nouvel utilisateur
            .post(`${this.path}/connection`,) // Connection d'un utilisateur
            .put(`${this.path}/:id`,) //Modification des données utilisateur
            //.delete(`${this.path}/:id`,auth,this.userCtrl.deleteUser) //Supression utilisateur
        
            .post(`${this.path}/decodage`, ) // Décodage du token
        
            .post(`${this.path}/forget-password`,) // Génération du lien de réinitailisation mdp
            .post(`${this.path}/reset-password`,) // Envoi du mail pour réinitialiser le mdp
    }
}