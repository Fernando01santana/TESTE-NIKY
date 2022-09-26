/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomModule } from '../classroom/classroom.module';
import Classes from '../classroom/typeorm/entities/classes.entities';
import Contact from '../instructor/typeorm/entities/contact.entity';
import { StudentController } from './controllers/student.controller';
import StudentService from './services/student.service';
import Address from './typeorm/entities/address.entity';
import Students from './typeorm/entities/students.entity';
import TypeStudant from './typeorm/entities/typeStudant';


@Module({
    imports: [TypeOrmModule.forFeature([Students, Address,TypeStudant,ClassroomModule,Contact,Classes])],
    controllers: [StudentController],
    providers: [StudentService],
    exports:[StudentService]
})
export class StudentModule {}
