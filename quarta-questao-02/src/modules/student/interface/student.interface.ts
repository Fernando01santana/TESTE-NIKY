export interface IStudent{
    id: string;
    name:string,
    address_id:string,
    phone:string,
    birth_day:Date,
    height:number,
    weight:number,
    type_student:typeStudent,
    classes: number[]; // Para representar as turmas matriculadas
    created_at:Date,
    updated_at:Date
}

export enum typeStudent {
    default = 'DEFAULT',
    monitor = 'MONITOR'
}