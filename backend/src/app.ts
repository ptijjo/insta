import express from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { Route } from "./routes";
import { Server } from "socket.io";

export class App{

    private port: number | string;
    private app: express.Application;
    private  server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    io: any;

    constructor(routes:Route[]){
        this.app = express(); 
        this.port = process.env.PORT || 8585;
        this.server = http.createServer(this.app);
        this.io = new Server(this.server, {
            cors: {
                origin:"*"
            }
        });

        this.listen();
        this.initilizeServer();
        this.initializeRoutes(routes);
        this.initializeSocket();
        this.getSocket();

    }

    //Méthode pour écouter sur quel port notre serveur tourne
    private listen():void{
        this.server.listen(this.port, ()=>{
            console.log(`🚀 Notre serveur tourne sur le port : ${this.port}`)   
        })
    };

    //Méthode qui initialise notre serveur
    private initilizeServer():void{
        this.app
        .use(cors())
        .use(morgan("dev"))
        .use(express.json())
    };

   

    //Méthode pour les différentes routes
    private initializeRoutes(routes:Route[]){
        routes.forEach(route =>{
            this.app.use("/",route.router)
        })
    };


    //Méthode pour initialiser notre socket
    private initializeSocket(): void{
        this.io.on("connection", (socket: any) => {
            console.log("user connected")

            socket.on("disconnect", () => {
                console.log("user disconnected");
                
            })
        });
    };

    //Méthode pour pouvoir utiliser le socket partout
    private getSocket() {
        return this.io;
    }
    
}