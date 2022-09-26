import Students from "src/modules/student/typeorm/entities/students.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('enrollment')
export default class Enrollment{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Students,students=> students.id,{onDelete:'CASCADE',eager:true})
    @JoinColumn({name:'student'})
    student: Students

    @Column({name:'enrollment_code',type:'int'})
    enrollment_code:number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}