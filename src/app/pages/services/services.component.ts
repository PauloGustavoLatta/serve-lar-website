import { Component } from '@angular/core';
import { cardService } from 'src/app/services/card-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  responsiveOptions: any[] | undefined = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];
  items: cardService[] = [
    {
      src: '../../../assets/images/Joape-6-litros.jpg',
      title: 'Climatizador Joape',
      description:
        'Instalação autorizada e especializada do climatizador da Joape.',
    },
    {
      src: '../../../assets/images/painel.jpg',
      title: 'Reparo de painel elétrico',
      description: 'Experiência na montagem de cada tipo de painéis elétricos.',
    },
    {
      src: '../../../assets/images/caixa.jpg',
      title: 'Interruptores',
      description: 'Experiência na montagem de tomadas e interruptores.',
    },
    {
      src: '../../../assets/images/aterramento.jpg',
      title: 'Aterramento',
      description: 'Experiência na instalação e manutenção de aterramento.',
    },
    {
      src: '../../../assets/images/geral.jpg',
      title: 'Serviços elétricos gerais',
      description:
        'Instalações elétricas, manutenção, reparo, restauração e troca.',
    },
    {
      src: '../../../assets/images/encanamento.jpg',
      title: 'Encanamento',
      description: 'Experiência em todo tipo de serviço de encanamento.',
    },
  ];
}
