import Address from './address.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import TypeStudant from './typeStudant';
import Contact from 'src/modules/instructor/typeorm/entities/contact.entity';

@Entity('student')
export default class Students {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToOne(() => Address, address => address.id,{onDelete:'CASCADE'})
    @JoinColumn({name:'address'})
    address: Address

    @OneToOne(() => Contact, contact => contact.id,{onDelete:'CASCADE'})
    @JoinColumn({name:'contact'})
    contact:Contact;

    @Column()
    birth_day:Date;

    @Column({ type: 'real'})
    height: number;

    @Column({type:'real'})
    weight:number;

    @OneToOne(() => TypeStudant, typeStudant => typeStudant.id,{eager:true})
    @JoinColumn({name:'type_student'})
    type_student: TypeStudant;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
