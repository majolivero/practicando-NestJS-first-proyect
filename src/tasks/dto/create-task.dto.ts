/* eslint-disable prettier/prettier */
//Especifico datos que voy a estar recibiendo
export class CreateTaskDto {  //Para usar esta clase en otras partes la exporto y la importo en el archivo de task controller
    title: string;
    description: string;
    done: boolean;
}