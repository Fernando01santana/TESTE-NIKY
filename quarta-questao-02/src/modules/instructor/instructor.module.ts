/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Classes from '../classroom/typeorm/entities/classes.entities';
import Contact from './typeorm/entities/contact.entity';
import Address from '../student/typeorm/entities/address.entity';
import Students from '../student/typeorm/entities/students.entity';
import TypeStudant from '../student/typeorm/entities/typeStudant';
import { InstructorController } from './controllers/instructor.controller';
import InstructorService from './service/instructor.service';
import Instructor from './typeorm/entities/instructor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Instructor,Contact,Address,Classes])],
    controllers: [InstructorController],
    providers: [InstructorService],
})
export class InstructorModule {}
