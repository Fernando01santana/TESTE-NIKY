import { IsNotEmpty, IsString } from "class-validator";
import { CreateStudentDto } from "./create-student.dto";

export class UpdatedStudentDto{
    @IsString()
    @IsNotEmpty()
    id:string

    @IsNotEmpty()
    data:CreateStudentDto
}