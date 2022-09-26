import { IsNotEmpty, IsString } from "class-validator"

export class CreateInstructorDto{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    document:string

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    contact:string

    @IsNotEmpty()
    address:IAddress
}

export interface IAddress{
    street:string
    district:string
    number:string
    city:string
    state:string
}