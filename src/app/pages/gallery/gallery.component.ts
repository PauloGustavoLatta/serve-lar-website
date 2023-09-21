import { Component, OnInit, ViewChild } from '@angular/core';
import { Gallery, GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [GalleryModule, MatIconModule],
})
export class GalleryComponent implements OnInit {
  items = [
    'caixa.webp',
    'aterramento.webp',
    'encanamento.webp',
    'geral.webp',
    'imagem-carlos.webp',
    'painel.webp',
    'serve-lar.webp',
    'Joape-6-litros.jpg',
    'Manutencao-preventiva-eletrica.jpg',
  ];

  constructor(private gallery: Gallery) {}

  ngOnInit() {
    const galleryRef = this.gallery.ref('myGallery');

    for (let item of this.items) {
      galleryRef.addImage({
        src: `./assets/images/${item}`,
        thumb: `./assets/images/${item}`,
      });
    }
  }
}
