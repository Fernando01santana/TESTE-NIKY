import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTypeTask } from "../dto/create-typetask";
import { UpdateTypeTask } from "../dto/update-typetask";
import TypeTask from "../typeorm/entities/typeTask.entities";

@Injectable()
export default class TypeTaskService{
    constructor(
        @InjectRepository(TypeTask)
        private typeTaskRepositorie:Repository<TypeTask>
    ){}

    async create(createTypeTask:CreateTypeTask):Promise<TypeTask>{
        const typeTask = await this.typeTaskRepositorie.save({name:createTypeTask.name})
        return typeTask
    }

    async update(updatedTypeTask:UpdateTypeTask):Promise<TypeTask>{
        const typeTask = await this.typeTaskRepositorie.findBy({id:updatedTypeTask.id})
        if(!typeTask[0].id){
            throw new BadRequestException('Tipo de atividade nao encontrada')
        }

        typeTask[0].name = updatedTypeTask.name
        return await this.typeTaskRepositorie.save(typeTask[0])
    }

    async findAll():Promise<TypeTask[]>{
        return this.typeTaskRepositorie.find()
    }

    async findOne(id:string):Promise<TypeTask>{
        const students = await this.typeTaskRepositorie.findBy({id:id})
        if (!students) {
            throw new BadRequestException("Atividade  especificada nao encontrada");
        }
        return students[0]
    }

    async remove(id:string):Promise<void>{
        const student = await this.typeTaskRepositorie.findBy({id:id})
        await this.typeTaskRepositorie.remove(student)
        return
    }
}