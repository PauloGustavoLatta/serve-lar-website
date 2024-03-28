import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Photoservice {
  getData() {
    return [
      {
        itemImageSrc: 'assets/images/caixa.jpg',
        thumbnailImageSrc: 'assets/images/caixa.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/aterramento.jpg',
        thumbnailImageSrc: 'assets/images/aterramento.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/geral.jpg',
        thumbnailImageSrc: 'assets/images/geral.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/imagem-carlos.jpg',
        thumbnailImageSrc: 'assets/images/imagem-carlos.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/painel.jpg',
        thumbnailImageSrc: 'assets/images/painel.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/serve-lar.jpg',
        thumbnailImageSrc: 'assets/images/serve-lar.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/Joape-6-litros.jpg',
        thumbnailImageSrc: 'assets/images/Joape-6-litros.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/Manutencao-preventiva-eletrica.jpg',
        thumbnailImageSrc: 'assets/images/Manutencao-preventiva-eletrica.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      }
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
