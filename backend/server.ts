import { App } from "./src/app";
import { UserRoute } from './src/routes/user.route';



const server = new App([new UserRoute()]); 

export const io = server.getSocket();

