import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class migrations1664094461298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'typeStudant',
                columns:[
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
            'student',
            new TableForeignKey({
                columnNames: ['type_student'],
                referencedTableName: 'typeStudant',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('student','type_student')
        await queryRunner.dropTable('typeStudant')
    }

}
