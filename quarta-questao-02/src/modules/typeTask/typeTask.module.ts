import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeTaskController } from "./controller/typeTask.controllet";
import TypeTaskService from "./services/typeTask.service";
import TypeTask from "./typeorm/entities/typeTask.entities";

@Module({
    imports: [TypeOrmModule.forFeature([TypeTask])],
    controllers: [TypeTaskController],
    providers: [TypeTaskService],
    exports:[TypeTaskService]
})
export class TypeTaskModule {}