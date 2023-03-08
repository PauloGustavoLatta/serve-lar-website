import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent {

  constructor(
    public router: Router
  ) {}

  home(): void {
    this.router.navigate(['']);
  }

  service(): void {
    this.router.navigate(['servicos']);
  }

  contact(): void {
    this.router.navigate(['contato']);
  }
}
