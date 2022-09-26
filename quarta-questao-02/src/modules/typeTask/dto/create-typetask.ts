import { IsString } from "class-validator";

export class CreateTypeTask{
    @IsString()
    name:string
}