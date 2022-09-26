import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class migrations1664092810403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'frequency',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'present',
                        type: 'boolean',
                    },
                    {
                        name:'code',
                        type:'int'
                    },
                    {
                        name: 'student',
                        type: 'uuid',
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
            'frequency',
            new TableForeignKey({
                columnNames: ['student'],
                referencedTableName: 'student',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('frequency','student')
        await queryRunner.dropTable('frequency')
    }

}
