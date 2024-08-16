/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Tasks';

@Injectable()
export class TasksService {

    //Este arreglo tasks tiene que tener especificamente un tipo de dato, en este caso llamado Task[], para lo cual vamos a crear una carpeta llamada interfaces.
    tasks: Task[] = [
        {
            id: 1,
            title: "Testing",
            description: "testing description",
            done: true
        },
        {
            id: 2,
            title: "Testing2",
            description: "testing 2 description",
            done: true
        },
        {
            id: 3,
            title: "Testing3",
            description: "testing 3 description",
            done: true
        }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }
    
    getTask(id: number): Task {
        return this.tasks.find(task => task.id === id); //Por cada tarea que empiece a recorrer comprueba si el task.id es igual a id 
    }
}


