import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serve-lar-website';

  constructor(public router: Router) {}

  goTo(url: string = ''): void {
    this.router.navigate([url]);
  }
}
