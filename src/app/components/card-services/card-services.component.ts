import { Component, Input } from '@angular/core';

import { cardService } from 'src/app/services/card-services.service';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent {
  @Input() card: cardService = {
    src: '',
    title: '',
    description: ''
  };
}
