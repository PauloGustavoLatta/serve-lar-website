import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardServicesComponent } from './components/card-services/card-services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryModule } from 'ng-gallery';
import { HomeComponent } from './pages/home/home.component';
import { IconComponent } from './components/icon/icon.component';
import { LocationComponent } from './pages/location/location.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    LocationComponent,
    IconComponent,
    CardServicesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    GalleryComponent,
    ContactComponent,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
