import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class migrations1664100422593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(

        new Table({
            name: 'contact',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'phone',
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
            }),
        )

        await queryRunner.createForeignKey(
            'student',
            new TableForeignKey({
                columnNames: ['contact'],
                referencedTableName: 'contact',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contact');
    }

}
