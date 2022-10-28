import { IsNotEmpty, IsString, IsEmail, IsNumberString, MaxLength, MinLength } from "class-validator";


export class CreateRegisterDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(12)
    password: string;

    @IsNotEmpty()
    @IsString()
    site: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(11)
    @MaxLength(11)
    phone: number;
}