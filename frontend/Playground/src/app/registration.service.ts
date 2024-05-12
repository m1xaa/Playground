import { Injectable } from '@angular/core';
import { Parent } from './objects/parent';
import { HttpserviceService } from './httpservice.service';
import { User } from './objects/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private httpService: HttpserviceService) { }


  register(name: string, surname: string, age: number, username:string, password:string) {
    var parent = new Parent(name, surname, age);
    var user = new User(username, password);
    this.httpService.register(user, parent).subscribe(
      response => {
        console.log('Success:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  //ovo treba da salje usera i person na back
}
