import { Injectable } from '@angular/core';
import { Parent } from './objects/parent';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }


  register(name: string, surname: string, age: number, username:string, password:string) {
    var parent = new Parent(name, surname, age);
    console.log(parent);
  }

  //ovo treba da salje usera i person na back
}
