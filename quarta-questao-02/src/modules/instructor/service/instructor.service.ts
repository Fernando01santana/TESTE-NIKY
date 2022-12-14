import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Classes from "src/modules/classroom/typeorm/entities/classes.entities";
import Contact from "src/modules/instructor/typeorm/entities/contact.entity";
import Address from "src/modules/student/typeorm/entities/address.entity";
import AppError from "src/shared/error/AppError";
import { Repository } from "typeorm";
import { CreateInstructorDto } from "../dto/create-instructor.dto";
import { UpdatedInstructorDto } from "../dto/instructor-updated.dto";
import Instructor from "../typeorm/entities/instructor.entity";

@Injectable()
export default class InstructorService{
    constructor(
        @InjectRepository(Instructor)
        private instructorRepositorie:Repository<Instructor>,
        @InjectRepository(Contact) 
        private  contactRepositorie:Repository<Contact>,
        @InjectRepository(Address) 
        private  addressRepositorie:Repository<Address>,
        @InjectRepository(Classes) 
        private  classesRepositorie:Repository<Classes>,
    ){}

    async create(createInstructor:CreateInstructorDto):Promise<Instructor>{
        const searchInstructor = await this.instructorRepositorie.findBy({document:createInstructor.document})
        
        if (searchInstructor) {
            throw new AppError("Instrutor ja cadastrado na base de dados",400);
        }
        const address = await this.addressRepositorie.save(createInstructor.address)
        const createContact = await this.contactRepositorie.save({phone:createInstructor.contact})

        const instructorData:any = {
            address:address,
            document:createInstructor.document,
            name:createInstructor.name,
            title:createInstructor.title,
            contact:createContact
        }
        try {
            const instructor = await this.instructorRepositorie.save(instructorData)
            return instructor
        } catch (error) {
            throw new AppError("Erro ao salvar instructor: "+error,400);
        }

        }

    async findAll():Promise<Instructor[]>{
            return this.instructorRepositorie.find()
        }

    async findOne(id:any):Promise<Instructor>{
            const students = await this.instructorRepositorie.findBy({id:id.id})
            if (!students) {
                throw new AppError("Instrutor especificado nao encontrado",401);
            }
            return students[0]
        }

    async update(updatedInstructor:UpdatedInstructorDto):Promise<Instructor>{
            const searchInstructor = await this.instructorRepositorie.findBy({id:updatedInstructor.id})
            if (!searchInstructor[0]?.id) {
                throw new AppError('Nenhum instrutor encontrado',401)
            }

            const address = await this.addressRepositorie.save(updatedInstructor.data.address)
            const createContact = await this.contactRepositorie.save({phone:updatedInstructor.data.contact})

            searchInstructor[0].address = address
            searchInstructor[0].contact = createContact
            searchInstructor[0].document = updatedInstructor.data.document
            searchInstructor[0].name = updatedInstructor.data.name
            searchInstructor[0].title = updatedInstructor.data.title
            try {
                return  this.instructorRepositorie.save(searchInstructor[0])
            } catch (error) {
                throw new AppError('Erro ao atualizar informacoes de instrutor',400)
            }

        }

    async remove(id:any):Promise<void>{     
            const instructor = await this.instructorRepositorie.findBy({id:String(id.id)})
            await this.instructorRepositorie.remove(instructor)
            return
        }

    async vinculeInstructorToClass(idInstructor:any,idClass:any):Promise<Instructor>{  

                const classe = await this.classesRepositorie.findBy({id:idInstructor.idClass})            
                if (classe.length === 0) {
                    throw new AppError("Classe informada nao encontrada",401);
                }

                const instructor = await this.instructorRepositorie.findBy({id:idInstructor.idInstructor})
                
                if (instructor.length == 0) {
                    throw new AppError("Instrutor informada nao encontrada",401);
                }
                
                classe[0].instructor = instructor[0]

                if (!instructor[0].classes) {
                    instructor[0].classes = []
                    instructor[0].classes.push(classe[0])
                }else{
                    instructor[0].classes.push(classe[0])
                }
                classe[0].instructor = instructor[0]
                try {

                const instructorVinculed = await this.instructorRepositorie.save(instructor[0])
                const classUpdated = await this.classesRepositorie.save(classe[0])
                return instructorVinculed
            } catch (error) {
                console.log(error.message);
                throw new AppError("Erro ao salvar instructor: "+error,400);
                
            }


        }
    }
