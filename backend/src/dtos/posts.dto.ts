/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    public titre!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(500)
    public body!: string;
}
