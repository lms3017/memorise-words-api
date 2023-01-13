import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WordModule } from './word/word.module';
import { GroupModule } from './group/group.module';
import { SetModule } from './set/set.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      logging: true,
      autoLoadEntities: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
    }),
    UsersModule,
    WordModule,
    GroupModule,
    SetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
