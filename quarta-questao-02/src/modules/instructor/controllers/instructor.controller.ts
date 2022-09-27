import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { CreateInstructorDto } from "../dto/create-instructor.dto";
import { UpdatedInstructorDto } from "../dto/instructor-updated.dto";
import InstructorService from "../service/instructor.service";
import Instructor from "../typeorm/entities/instructor.entity";



@Controller('instructor')
export class InstructorController{
    constructor(private  instructorService:InstructorService){}

    @Post('create')
    async create(@Body() createInstructor:CreateInstructorDto):Promise<any>{
        const result = await this.instructorService.create(createInstructor)
        return result
    }

    @Post('update')
    async updated(@Body() updatedInstructor:UpdatedInstructorDto):Promise<Instructor>{
        return await this.instructorService.update(updatedInstructor)
    }

    @Get('find')
    async findAll():Promise<Instructor[]>{
        return await this.instructorService.findAll()
    }

    @Get('find/one')
    async findOne(@Query() id:string):Promise<Instructor>{
        const result = await this.instructorService.findOne(id)
        return result
    }

    @Get('vincule/class')
    async vinculeClass(@Query() idInstructor:String,idclass:String):Promise<any>{
        return this.instructorService.vinculeInstructorToClass(idInstructor,idclass)
    }

    @Delete('remove')
    async remove(@Query() id:String):Promise<void>{
        const result = await this.instructorService.remove(id)
        return result
    }

}