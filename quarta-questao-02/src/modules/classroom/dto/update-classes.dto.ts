import { IsNotEmpty, IsString } from "class-validator";
import { CreateClassesDto } from "./create-classes.dto";

export class UpdateClasses{
    @IsNotEmpty()
    data:CreateClassesDto

    @IsString()
    @IsNotEmpty()
    id:string
}