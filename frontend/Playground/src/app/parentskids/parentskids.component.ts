import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parent } from '../objects/parent';
import { Kid } from '../objects/kid';
import { KidsService } from '../kids.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parentskids',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parentskids.component.html',
  styleUrl: './parentskids.component.css'
})
export class ParentskidsComponent {

  parent!: Parent;
  kids: Kid[];

  constructor(private router: Router, private kidsService: KidsService) {
    const routerExtras = this.router.getCurrentNavigation()?.extras.state;

    if (routerExtras && routerExtras["person"]) {
      this.parent = routerExtras["person"];
      console.log(this.parent);
    } else {
      //this.router.navigate(['/error']);
    }
    this.kids = kidsService.getKids();
  }

  //moram ovde da dobijem roditelja preko logina i onda da ucitam njegovu decu na screen
  //to ce se sa djangom raditi tako sto ja dobijem roditelja i onda preko id dobijem njegovu decu posle sa djangom

  goToKid(kid:Kid) {
    this.router.navigate(['/kidsTasks'], {state: {"kid": JSON.stringify(kid)}});
  }
}
