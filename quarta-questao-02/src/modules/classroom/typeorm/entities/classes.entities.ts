import Instructor from "src/modules/instructor/typeorm/entities/instructor.entity";
import Students from "src/modules/student/typeorm/entities/students.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import TypeTask from "../../../typeTask/typeorm/entities/typeTask.entities";

@Entity('classes')
export default class Classes{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Instructor, (instructor) => instructor.classes,{eager:true})
    @JoinColumn({name:'instructor'})
    instructor: Instructor

    @ManyToMany(() => Students,{nullable:true,cascade: true,eager:true})
    @JoinTable()
    student: Students[]

    @OneToOne(() => TypeTask, typetask => typetask.id,{eager:true,nullable:true})
    @JoinColumn({name:'typeTask'})
    typeTask: TypeTask

    @Column()
    qtde_student:string

    @Column()
    max_student:string

    @Column({type:'time'})
    hour_classroom:Date

    @Column()
    initial_date:Date

    @Column()
    final_date:Date

    @Column({type:'time'})
    class_duration:Date

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}