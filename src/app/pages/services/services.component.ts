import { Component } from '@angular/core';
import { cardService } from 'src/app/services/card-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  items: cardService[] = [
    {
      src: '../../../assets/images/Joape-6-litros.jpg',
      title: 'Instalação de climatizador Joape',
      description:
        'Instalação autorizada e especializada do climatizador da Joape.',
    },
    {
      src: '../../../assets/images/painel.webp',
      title: 'Reparo de painel elétrico',
      description: 'Experiência na montagem de cada tipo de painéis elétricos.',
    },
    {
      src: '../../../assets/images/caixa.webp',
      title: 'Instalação de interruptores',
      description: 'Experiência na montagem de tomadas e interruptores.',
    },
    {
      src: '../../../assets/images/aterramento.webp',
      title: 'Instalação de aterramento',
      description: 'Experiência na instalação e manutenção de aterramento.',
    },
    {
      src: '../../../assets/images/geral.webp',
      title: 'Serviços elétricos gerais',
      description:
        'Instalações elétricas, manutenção, reparo, restauração e troca.',
    },
    {
      src: '../../../assets/images/encanamento.webp',
      title: 'Encanador',
      description: 'Experiência em todo tipo de serviço de encanamento.',
    },
  ];
}
