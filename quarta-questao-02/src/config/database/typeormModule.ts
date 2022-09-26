import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import ormconfig from './ormconfig';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      useFactory: async () => {
        await ormconfig.initialize();
        return ormconfig;
      },
    }
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}