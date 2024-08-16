/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Tasks";

@Controller('tasks')
export class TasksController {  

    //Para poder usar el servicio lo instancio. A traves de este TaskService puedo acceder a los métodos que he creado en el task.service. Private es el alcance.  
    constructor( private taskService:TasksService){}

//Esta ruta funciona porque TaskController ha sido llamado en app.module.ts
    @Get() //Si dejamos los parentesis vacios, quiere decir que la ruta por defecto es /tasks, pero si colocamos algo dentro, seria /tasks/(lo que este dentro del parentesis)
    getTasks(): Task[]{  
        return this.taskService.getTasks();
    }

    @Get(":taskId")
    getTask(@Param("taskId") taskId : string){
        return this.taskService.getTask(parseInt(taskId));
    }

    //Usando sintaxis de express, aunque no es la forma recomendada
    // @Get()
    // getTask(@Req() req, @Res() res) : Response{
    //     console.log(req.body);
    //     return res.send("Hello World");
    // }

    @Post()
    createTasks(@Body() task:CreateTaskDto): string {
        console.log(task.title, task.description, task.done);
        return "Creating a Task";
    }

    @Put(":id")
    updateTask(@Body() task:CreateTaskDto, @Param("id") id): string {
        console.log(task);
        console.log(id);
        return "Updating a Task";
    }

    @Delete(":id")
    deleteTask(@Param ("id") id): string {  //Aquí le estoy indicando que estoy recibiendo un parametro
        console.log(id); 
        return `Deleting a asking number: ${id}`;
    }


}