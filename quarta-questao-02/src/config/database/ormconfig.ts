import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import Classes from "src/modules/classroom/typeorm/entities/classes.entities";
import TypeTask from "src/modules/typeTask/typeorm/entities/typeTask.entities";
import Contact from "src/modules/instructor/typeorm/entities/contact.entity";
import Instructor from "src/modules/instructor/typeorm/entities/instructor.entity";
import Address from "src/modules/student/typeorm/entities/address.entity";
import Students from "src/modules/student/typeorm/entities/students.entity";
import TypeStudant from "src/modules/student/typeorm/entities/typeStudant";
import { DataSource } from "typeorm";
import Enrollment from "src/modules/enrollment/typeorm/entities/enrollment.entitie";

 const ormConfig = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: "",
    database: 'niky10',
    entities: [Address, Students,TypeStudant,Contact,Instructor,Classes,TypeTask,Enrollment],
    migrations: ["dist/shared/typeorm/migrations/*.js"],
    // cli:{migrationsDir:"dist/shared/typeorm/migrations/*.js"},
    synchronize: true,
  })


export default ormConfig