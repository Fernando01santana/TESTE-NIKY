import { IsNotEmpty, IsString } from "class-validator";
import { CreateInstructorDto } from "./create-instructor.dto";

export class UpdatedInstructorDto{
    @IsNotEmpty()
    data:CreateInstructorDto

    @IsString()
    @IsNotEmpty()
    id:string
}