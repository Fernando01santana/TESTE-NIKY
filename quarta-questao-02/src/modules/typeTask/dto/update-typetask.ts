import { IsNotEmpty, IsString } from "class-validator"

export class UpdateTypeTask{
    @IsString()
    @IsNotEmpty()
    id:string

    @IsString()
    @IsNotEmpty()
    name:string
}