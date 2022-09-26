import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { generateKey } from "crypto";
import { generate } from "rxjs";
import Students from "src/modules/student/typeorm/entities/students.entity";
import AppError from "src/shared/error/AppError";
import { Repository } from "typeorm";
import { CreateEnrollmentDto, StudentsNotPresent } from "../dto/create-enrollment.dto";
import Enrollment from "../typeorm/entities/enrollment.entitie";

@Injectable()
export default class EnrollmentService{
constructor(
    @InjectRepository(Enrollment)
    private enrollmentReopsitorie: Repository<Enrollment>,
    @InjectRepository(Students) 
    private  studentRepositorie:Repository<Students>,
){}

    async create(crateEnrollment:CreateEnrollmentDto):Promise<Enrollment[]>{
        const student = await this.studentRepositorie.findBy({id:crateEnrollment.idStudent})
        if (!student.length) {
            throw new AppError("Aluno nao encontrado",401);
        }
        try {
            const enrollmentSave = await this.enrollmentReopsitorie.save({student:student[0]})
            const enrrolment = await this.enrollmentReopsitorie.findBy({id:enrollmentSave.id})
            return enrrolment
        } catch (error) {
            throw new AppError("Erro ao criar matricula:"+error,400)
        }

    }
    async findAll():Promise<Enrollment[]>{
        const enrollment = await this.enrollmentReopsitorie.find()
        return enrollment
    }

    async remove(enrollmentId):Promise<void>{
        const enrolmment = await this.enrollmentReopsitorie.findBy({id:enrollmentId})
        if (!enrolmment.length) {
            throw new AppError("Matricula nao encontrada",401);
        }
        await this.enrollmentReopsitorie.remove(enrolmment)
        return
    }
}