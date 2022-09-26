import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class migrations1664102164802 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(

            new Table({
                name: 'instructor',
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
                        name: 'document',
                        type: 'varchar',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'contact',
                        type: 'uuid',
                    },
                    {
                        name: 'address',
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
                }),
            )

            await queryRunner.createForeignKey(
                'instructor',
                new TableForeignKey({
                    columnNames: ['contact'],
                    referencedTableName: 'contact',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                }),
            )

            await queryRunner.createForeignKey(
                'instructor',
                new TableForeignKey({
                    columnNames: ['address'],
                    referencedTableName: 'address',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                }),
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('instructor')
    }

}
