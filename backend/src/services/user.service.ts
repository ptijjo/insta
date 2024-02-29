import { PrismaClient } from "@prisma/client";


export class userService{

    private dbUser = new PrismaClient().user;
}