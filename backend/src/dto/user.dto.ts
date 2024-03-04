import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class createUserDto{
    @IsEmail()
    public email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(9)
    @MaxLength(32)
    public password!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    public first_name!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    public last_name!: string;


    @IsString()
    @IsNotEmpty()
    public profil_photo!: string;


    /*constructor(email: string, password: string,last_name:string,first_name:string,profil_photo:string) {
        this.email = email;
        this.password = password;
        this.first_name=first_name;
        this.last_name=last_name;
        this.profil_photo=profil_photo;
    }*/
  
}