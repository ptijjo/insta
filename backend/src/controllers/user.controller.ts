import {Request, Response, NextFunction } from 'express';
import { User } from '../interface/user.interface';
import { userService } from '../services/user.service';
import { createUserDto } from '../dto/user.dto';


export class userController{

    private user_service = new userService();

    public createUser = async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
        try {
            
        const userData:createUserDto= req.body;

        const newUser:User = await this.user_service.createUser(req.body);
            res.status(201).json({ data: newUser, message: 'User created successfully' })

        } catch (error) {
            next(error)
        }
    }
    
}