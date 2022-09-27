import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class migrations1664160430863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'enrollment',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'student',
                        type: 'uuid',
                        isNullable:true
                    },
                    {                        
                        name: 'enrollment_code',
                        type: 'int',
                        isGenerated:true,
                        generationStrategy:'increment',
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
            'enrollment',
            new TableForeignKey({
                columnNames: ['student'],
                referencedTableName: 'student',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        )
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('enrollment')

    }

}
