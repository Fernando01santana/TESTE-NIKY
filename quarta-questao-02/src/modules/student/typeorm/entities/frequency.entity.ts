import Address from './address.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('student')
export default class Students {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Students)
    @JoinTable()
    student: Students;

    @Column()
    frequency_day:Date

    @Column()
    present:boolean

    // @Column()
    // classe:string

    @Column()
    code: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
