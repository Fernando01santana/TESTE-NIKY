import { IsAlpha, IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentDto{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    phone:string

    @IsString()
    @IsNotEmpty()
    birth_day:string

    @IsString()
    @IsNotEmpty()
    height:number

    @IsString()
    @IsNotEmpty()
    weight:number

    @IsArray()
    @IsNotEmpty()
    type_student: string

    @IsNumber()
    @IsNotEmpty()
    classes:number

    @IsNotEmpty()
    address:address
}

interface address {
    street:string;
    district:string;
    number:string
    city:string;
    state:string
}