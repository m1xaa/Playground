import { Task } from "./task";

export interface Kid {
    id: string;
    name: string;
    description: string;
    age: number;
    image: string;
    birthdate: Date;
    tasks: Task[];
}