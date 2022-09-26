import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class migrations1664106571464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'classes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'instructor',
                        type: 'uuid',
                    },
                    {
                        name: 'student',
                        type: 'uuid',
                        isNullable:true
                    },
                    {
                        name: 'typeTask',
                        type: 'uuid',
                        isNullable:true
                    },
                    {
                        name: 'max_student',
                        type: 'varchar',
                    },
                    {
                        name: 'qtde_student',
                        type: 'varchar',
                    },
                    {
                        name: 'hour_classroom',
                        type: 'time',
                        isNullable:true
                    },
                    {
                        name: 'initial_date',
                        type: 'date',
                    },
                    {
                        name: 'final_date',
                        type: 'date',
                    },
                    {
                        name: 'class_duration',
                        type: 'time',
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
                ]
            })
        )

        await queryRunner.createForeignKey(
            'classes',
            new TableForeignKey({
                columnNames: ['student'],
                referencedTableName: 'student',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        )

        await queryRunner.createForeignKey(
            'classes',
            new TableForeignKey({
                columnNames: ['instructor'],
                referencedTableName: 'instructor',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes')
    }

}
