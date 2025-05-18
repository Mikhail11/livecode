import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { EditorModule } from '~gateways/editor';
import { AuthModule } from '~modules/auth';
import { ExecutorModule } from '~modules/executor';
import { UserModel, UserModule } from '~modules/user';
import { HttpClientModule } from '~utils/http-client';
import { HttpClientRxModule } from '~utils/http-client-rx';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      // envFilePath и isGlobal делает ConfigModule injectable и env-переменные доступными внутри модулей (классов)
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel],
      // Чтобы Sequelize создавал таблицы в БД автоматически на основании наших моделей
      autoLoadModels: true,
    }),
    HttpClientModule,
    HttpClientRxModule,
    EditorModule,
    AuthModule,
    UserModule,
    ExecutorModule,
  ],
})
export class AppModule {}
