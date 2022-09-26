import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { CreateTypeTask } from "../dto/create-typetask";
import { UpdateTypeTask } from "../dto/update-typetask";
import TypeTaskService from "../services/typeTask.service";



@Controller('typetask')
export class TypeTaskController{
    constructor(private  typeTaskService:TypeTaskService){}

    @Post('create')
    async create(@Body() createStudent:CreateTypeTask):Promise<any>{
        const result = await this.typeTaskService.create(createStudent)
        return result
    }

    @Post('update')
    async update(@Body() updatedStudent:UpdateTypeTask):Promise<any>{
        const result = await this.typeTaskService.update(updatedStudent)
        console.log(result);
        return result
    }

    @Post('find')
    async findAll():Promise<any>{
        const result = await this.typeTaskService.findAll()
        console.log(result);
        return result
    }

    @Get('find/one')
    async findOne(@Query() id:string):Promise<any>{
        const result = await this.typeTaskService.findOne(id)
        return result
    }

    @Delete('remove')
    async remove(@Query() id:string):Promise<void>{
        const result = await this.typeTaskService.remove(id)
        return result
    }
}