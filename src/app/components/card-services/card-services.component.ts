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

  constructor() {}

  solicitar(tipo: string): void {
    window.open(
      `https://api.whatsapp.com/send?phone=5548996290394&text=Olá, gostaria de solicitar um ${tipo}`,
      '_blank'
    );
  }
}
