import { PrismaClient } from "@prisma/client";
import { User } from "../interface/user.interface";
import { createUserDto } from "../dto/user.dto";
import { HttpException } from '../execptions/HttpException';


export class userService{

    private dbUser = new PrismaClient().user;
    

    public createUser = async (userData:createUserDto):Promise<User>=>{
            const findUser = await this.dbUser.findUnique({
                where:{
                    email:userData.email
                }
            });
            if (findUser) throw new HttpException(401,`This email ${userData.email} already exists`);
    
            const newUser = await this.dbUser.create({
                data:{
                ...userData
                }
            });
    
            return newUser
    }
}