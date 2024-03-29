import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
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
      title: 'Loaclização',
    },
  },
  {
    path: 'sobre',
    component: AboutComponent,
    data: {
      title: 'Sobre',
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
