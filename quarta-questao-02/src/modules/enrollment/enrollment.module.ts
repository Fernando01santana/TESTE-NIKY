import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Students from "../student/typeorm/entities/students.entity";
import { EnrollmentController } from "./controller/EnrollmentController";
import EnrollmentService from "./services/enrollment.service";
import Enrollment from "./typeorm/entities/enrollment.entitie";

@Module({
    imports: [TypeOrmModule.forFeature([Students,Enrollment])],
    controllers: [EnrollmentController],
    providers: [EnrollmentService],
    exports:[EnrollmentService]
})
export class EnrollmentModule {}