import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateEnrollmentDto{
    @IsString()
    @IsNotEmpty()
    idStudent:string

    @IsBoolean()
    @IsNotEmpty()
    present:boolean

    @IsString()
    @IsNotEmpty()
    frequencyDay:string
}

export class StudentsNotPresent{
    @IsString()
    @IsNotEmpty()
    name:string
}