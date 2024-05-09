import { Person } from "./person";

export class Parent extends Person {
    
    constructor(public override name: string, public override surname: string, public override age: number) {
        super(name, surname, age);
    }
}