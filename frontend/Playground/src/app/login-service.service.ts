import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KidsService } from './kids.service';
import { ParentsService } from './parents.service';
import { Person } from './objects/person';
import { Kid } from './objects/kid';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router, private kidsService: KidsService, private parentsService: ParentsService) { }

  logIn(username: string, password: string) {
    this.logInParent(username, password);
    this.logInKid(username, password);
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
