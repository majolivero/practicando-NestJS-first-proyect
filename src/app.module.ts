/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost/nest-tutorial1')], 
  controllers: [AppController, TasksController],  //Aquí se agregó la clase task controller
  providers: [AppService, TasksService],
})
export class AppModule {}


//En este proyecto se empieza a usa MongoDB. 
//Link de youtube: https://www.youtube.com/watch?v=NYoCbihISxw