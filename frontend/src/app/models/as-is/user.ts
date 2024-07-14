import { Kid } from "./kid";

export interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    kids: Kid[];
}