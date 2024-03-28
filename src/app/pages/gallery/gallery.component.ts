import { Component, OnInit } from '@angular/core';

import { GalleriaModule } from 'primeng/galleria';
import { GalleryModule } from 'ng-gallery';
import { MatIconModule } from '@angular/material/icon';
import { Photoservice } from '../../services/photoservice.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [GalleryModule, MatIconModule, GalleriaModule],
})
export class GalleryComponent implements OnInit {
  images: any[] | undefined;

  positionOptions = [
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: Photoservice) {}

  ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
  }
}
