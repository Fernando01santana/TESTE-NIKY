import { StudentModule } from './modules/student/student.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from './config/database/typeormModule';
import { InstructorModule } from './modules/instructor/instructor.module';
import Classes from './modules/classroom/typeorm/entities/classes.entities';
import { TypeTaskModule } from './modules/typeTask/typeTask.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';

 
@Module({
  imports: [
    StudentModule, 
    TypeOrmModule,
    InstructorModule,
    ClassroomModule,
    TypeTaskModule,
    EnrollmentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
