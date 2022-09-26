import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Students from "./students.entity";

@Entity('address')
export default class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    street: string;

    @Column()
    district: string;

    @Column()
    number: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}