import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
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
    path: 'servicos',
    component: ServicesComponent,
    data: {
      title: 'Serviços',
    },
  },
  {
    path: 'contato',
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
