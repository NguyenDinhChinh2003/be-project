import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import dbConfigProduction from './config/db.config.production';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    load: [dbConfig],
  }),PropertyModule, TypeOrmModule.forRootAsync({
    useFactory: process.env.NODE_DEV === "production" ? dbConfigProduction : dbConfig
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
