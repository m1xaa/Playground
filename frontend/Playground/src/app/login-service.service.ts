import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KidsService } from './kids.service';
import { ParentsService } from './parents.service';
import { Person } from './objects/person';
import { Kid } from './objects/kid';
import { HttpserviceService } from './httpservice.service';
import { User } from './objects/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router, private kidsService: KidsService, private parentsService: ParentsService, private httpService: HttpserviceService) { }

  logIn(username: string, password: string) {
    this.httpService.login(new User(username, password)).subscribe(
      response => {
        console.log('Success:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  logInParent(username: string, password: string) {
    var parents = this.parentsService.getParents();
    for (var parent of parents) {
      if (parent.name === username && parent.surname === password) {
        this.navigate(parent);
      }
    }
  }


  logInKid(username: string, password: string) {
    var kids = this.kidsService.getKids();
    for (var kid of kids) {
      if (kid.name === username && kid.surname === password) {
        this.navigate(kid);
      }
    }
  }
  

  navigate(person: Person) {
    if (person instanceof Kid) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/parentskids'], {state: {"person": person}});
    }
  }
}
