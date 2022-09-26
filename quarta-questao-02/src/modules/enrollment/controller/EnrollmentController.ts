import { Body, Controller, Post } from "@nestjs/common";
import { CreateEnrollmentDto } from "../dto/create-enrollment.dto";
import EnrollmentService from "../services/enrollment.service";
import Enrollment from "../typeorm/entities/enrollment.entitie";

@Controller('enrollment')
export class EnrollmentController{
    constructor(
        private enrollmentService:EnrollmentService
    ){}

    @Post('create')
    async create(@Body() createEnrollment:CreateEnrollmentDto):Promise<Enrollment[]>{
        const result = await this.enrollmentService.create(createEnrollment)
        return result
    }
}