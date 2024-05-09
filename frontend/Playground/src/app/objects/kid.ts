import { Person } from "./person";

export class Kid extends Person {
    constructor(public override name: string, public override surname: string, public override age: number, public description: string) {
        super(name, surname, age);
        this.description = description;
    }
}