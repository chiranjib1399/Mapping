import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { MapComponent } from './map/map.component';
import { BookComponent } from './book/book.component'

const routes: Routes = [
  {path:"albums", component:AlbumsComponent},
  {
  path:"map", component: MapComponent
  },
  {path:"book",component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
