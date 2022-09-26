import { IsString } from "class-validator"

export class CreateClassroomtDto{
    instructor:string
    typeTask:string
    qtdeStudent:string
    maxStudent:string
    hourClassroom:string
    initialDate:string
    finalDate:string
    classDuration:string
    }
