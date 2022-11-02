import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FreeapiService } from './services/freeapi.service';
import { AlbumsComponent } from './albums/albums.component';
import { MapComponent } from './map/map.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    MapComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FreeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
