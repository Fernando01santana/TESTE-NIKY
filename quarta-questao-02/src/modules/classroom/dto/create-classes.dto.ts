import { IsNotEmpty, IsString } from "class-validator"

export class CreateClassesDto{

    @IsString()
    @IsNotEmpty()
    instructor:String

    @IsString()
    @IsNotEmpty()
    typeTask:String

    @IsString()
    @IsNotEmpty()
    qtdeStudent:String

    @IsString()
    @IsNotEmpty()
    masStudent:String

    @IsString()
    @IsNotEmpty()
    hourClassroom:String

    @IsString()
    @IsNotEmpty()
    initialDate:String

    @IsString()
    @IsNotEmpty()
    finalDate:String

    @IsString()
    @IsNotEmpty()
    classDuration:String
}
