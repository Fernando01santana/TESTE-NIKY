import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Instructor from "src/modules/instructor/typeorm/entities/instructor.entity";
import Students from "src/modules/student/typeorm/entities/students.entity";
import TypeTask from "src/modules/typeTask/typeorm/entities/typeTask.entities";
import { Repository } from "typeorm";
import { CreateClassroomtDto } from "../interface/class.interface";
import Classes from "../typeorm/entities/classes.entities";
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';
import { UpdateClasses } from "../dto/update-classes.dto";
import AppError from "src/shared/error/AppError";
@Injectable()
export default class ClassroomService{
    constructor(
    @InjectRepository(Students) 
    private  studentRepositorie:Repository<Students>,
    @InjectRepository(Instructor) 
    private  instructorRepositorie:Repository<Instructor>,
    @InjectRepository(Classes) 
    private  classesRepositorie:Repository<Classes>,
    @InjectRepository(TypeTask) 
    private  typetaskRepositorie:Repository<TypeTask>,
    ){}

    async create(createClass:CreateClassroomtDto):Promise<Classes>{
        const instructor = await this.instructorRepositorie.findBy({id:createClass.instructor})
        const searchTypeTask = await this.typetaskRepositorie.findBy({name:createClass.typeTask})
        
        if (!instructor) {
            throw new AppError("Instrutor nao encontrado",401);
        }

        if (!searchTypeTask) {
            throw new AppError("Tipo de atividade nao encontrado",401);
        }

        const hourClassroon = this.formatterDate(new Date(createClass.hourClassroom))
        const classDuration = this.formatterDate(new Date(createClass.classDuration))
        const classe = {
            class_duration: classDuration,
            final_date: new Date(createClass.finalDate),
            hour_classroom: hourClassroon,
            initial_date: new Date(createClass.initialDate),
            instructor:instructor[0],
            max_student:createClass.maxStudent,
            qtde_student:createClass.qtdeStudent,
            student:null,
            typeTask:searchTypeTask[0],
        }
        

        try {
            const classeCreated = await this.classesRepositorie.save(classe)
            return classeCreated
        } catch (error) {
            throw new AppError("Erro ao criar sala: "+error,400);
        }
    }

    async findAll():Promise<Classes[]>{
        try {
            const classes = await this.classesRepositorie.find({
                relations: {
                    student: true,
                },
            })
            return classes
        } catch (error) {
            throw new AppError("Erro ao recuperar salas: "+error,400);
        }

    }

    async update(updatedClasses:UpdateClasses):Promise<Classes>{
        const instructor = await this.instructorRepositorie.findBy({id:String(updatedClasses.data.instructor)})
        const searchTypeTask = await this.typetaskRepositorie.findBy({name:String(updatedClasses.data.typeTask)})
        
        if (!instructor.length) {
            throw new AppError("Instrutor nao encontrado! ",401);

        }

        if (!searchTypeTask.length) {
            throw new AppError("Tipo de atividade nao encontrada! ",401);

        }
        const hourClassroon = this.formatterDate(new Date(String(updatedClasses.data.hourClassroom)))
        const classDuration = this.formatterDate(new Date(String(updatedClasses.data.classDuration)))
        const classe = {
            class_duration: classDuration,
            final_date: new Date(String(updatedClasses.data.finalDate)),
            hour_classroom: hourClassroon,
            initial_date: new Date(String(updatedClasses.data.initialDate)),
            instructor:instructor[0],
            max_student:String(updatedClasses.data.masStudent),
            qtde_student:String(updatedClasses.data.qtdeStudent),
            student:null,
            typeTask:searchTypeTask[0],
        }
        
        try {
            const classUpdate = await this.classesRepositorie.save(classe)
            return classUpdate
        } catch (error) {
            throw new AppError("Erro ao atualizar sala: "+error,400);
        }

    }

    async findByInstructor(idStructor:string):Promise<Classes[]>{
        const instructor = await this.instructorRepositorie.findBy({id:idStructor})
        if (!instructor.length) {
            throw new AppError("Instrutor nao encontrado",401);
        }
        const classes = await this.classesRepositorie.find({where:{instructor:instructor}})
        return classes
    }

    async remove(id:string):Promise<Classes>{
        const classe = await this.classesRepositorie.findBy({id:id})
        await this.classesRepositorie.remove(classe)
        return
    }
    async vinculeForClass(idClassroom:string,idStudent:string):Promise<any>{
        const student = await this.studentRepositorie.findBy({id:idStudent})
        if (!student.length) {
            throw new AppError("Aluno nao encontrado",401);
        }

        const classe = await this.classesRepositorie.findBy({id:idClassroom})
        if (!classe.length) {
            throw new AppError("Sala nao encontrada",401);
        }

        if (!classe[0].max_student === !classe[0].qtde_student) {
            throw new AppError("Sala de aula com todas as vagas preenchidas",401);
        }

        const studentMonitor = classe[0].student.find(student => student.type_student.name === 'MONITOR')
        if (studentMonitor && student[0].type_student.name === "MONITOR") {
            throw new AppError("Sala ja contem um aluno monitor",400);
        }
        try {
            classe[0].student.push(student[0])
            classe[0].qtde_student += 1
            const classeSave = await this.classesRepositorie.save(classe[0])
            return classeSave 
        } catch (error) {
            throw new AppError("Erro ao vincular aluno a sala: "+error,400);
        }

    }

    formatterDate(data:Date){
        const timeZone = 'Brazil/East'
        const zonedDate = utcToZonedTime(data, timeZone)
        const pattern = 'yyyy.M.d HH:mm:ss.SSS \'GMT\''
        const output = format(zonedDate, pattern, { timeZone: 'Brazil/East' })
        return output
    }
}