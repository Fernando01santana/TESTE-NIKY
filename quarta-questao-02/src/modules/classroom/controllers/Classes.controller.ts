import { Body, Controller, Delete, Get, Post } from "@nestjs/common"
import { CreateClassesDto } from "../dto/create-classes.dto"
import { UpdateClasses } from "../dto/update-classes.dto"
import { CreateClassroomtDto } from "../interface/class.interface"
import ClassroomService from "../services/classroom.service"
import Classes from "../typeorm/entities/classes.entities"

@Controller('classroom')
export class ClassroomController{
    constructor(private  classesService:ClassroomService){}

    @Post('create')
    async create(@Body() createClassesDto:CreateClassroomtDto):Promise<any>{
        const result = await this.classesService.create(createClassesDto)
        return result
    }

    @Get('find')
    async findAll():Promise<Classes[]>{
        const result = await this.classesService.findAll()
        return result
    }

    @Post('updated')
    async update(updatedClasses:UpdateClasses):Promise<Classes>{
        const result = await this.classesService.update(updatedClasses)
        return result
    }

    @Get('find/instructor')
    async findByInstructor(idStructor:string):Promise<Classes[]>{
        const result = await this.classesService.findByInstructor(idStructor)
        return result
    }

    @Delete('remove')
    async remove(idClasses:string):Promise<any>{
        const result = await this.classesService.remove(idClasses)
        return result
    }
}