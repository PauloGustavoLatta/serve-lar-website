import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Início',
    },
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: {
      title: 'Serviços',
    },
  },
  {
    path: 'location',
    component: LocationComponent,
    data: {
      title: 'Serviços',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contato',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
