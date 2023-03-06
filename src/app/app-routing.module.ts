import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTesteComponent } from './home-teste/home-teste.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTesteComponent,
    data: {
      title: 'SisWeb',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
