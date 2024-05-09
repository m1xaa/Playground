import { Injectable } from '@angular/core';
import { Kid } from './objects/kid';

@Injectable({
  providedIn: 'root'
})
export class KidsService {

  kids: Kid[];

  constructor() {
    this.kids = [new Kid("mihajlo", "orlovic", 5, "volim patke"),
      new Kid("Aleksandar", "orlovic", 6, "volim guske"),
      new Kid("Milan", "petrovic", 7, "pipipu")
    ];
   }

   getKids() { return this.kids; }
   ///TODO async function for getting all kids 
}
