import { Injectable } from '@angular/core';
import { Parent } from './objects/parent';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
  parents: Parent[];

  constructor() {
    this.parents = [new Parent("Miroslav", "orlovic", 54),
      new Parent("Sladjana", "Orlovic", 54),
      new Parent("Gordana", "Vucic", 51)
    ];
   }

  public getParents(): Parent[] {
    return this.parents;
  }
}
