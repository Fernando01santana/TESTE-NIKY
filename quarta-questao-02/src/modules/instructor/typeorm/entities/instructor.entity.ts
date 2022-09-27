import Classes from "src/modules/classroom/typeorm/entities/classes.entities";
import Contact from "src/modules/instructor/typeorm/entities/contact.entity";
import Address from "src/modules/student/typeorm/entities/address.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('instructor')
export default class Instructor{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Classes, (classes) => classes.instructor)
    classes: Classes[]

    @Column()
    document: string;

    @Column()
    title: string;

    @OneToOne(() => Address, address => address.id,{eager:true,onDelete:'CASCADE'})
    @JoinColumn({name:'address'})
    address: Address

    @OneToOne(() => Contact, contact => contact.id,{eager:true,onDelete:'CASCADE'})
    @JoinColumn({name:'contact'})
    contact: Contact

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}