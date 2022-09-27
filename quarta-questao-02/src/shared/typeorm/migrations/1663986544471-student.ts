

import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class migration1663986494638 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'student',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name:'enrollent_code',
                        type:'varchar'
                    },
                    {
                        name: 'address',
                        type: 'uuid',
                    },
                    {
                        name: 'type_student',
                        type: 'uuid',
                    },
                    {
                        name: 'contact',
                        type: 'uuid',
                    },
                    {
                        name: 'birth_day',
                        type: 'date',
                    },
                    {
                        name: 'height',
                        type: 'varchar',
                    },                    {
                        name: 'weight',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('student');
    }

}
