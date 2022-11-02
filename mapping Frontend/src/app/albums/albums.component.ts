import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../services/freeapi.service';
import { Albums } from '../classes/albums';
import { Photos } from '../classes/photos';
import { JsonConvert } from 'json2typescript';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private freeapiservice : FreeapiService) { 
  
  }
 
  lstAlbums: Albums[] = [];
  AlbamSelected!: Number;
  lstPhotos:any;
 


  ngOnInit(): void {
    this.freeapiservice.getAblubs().subscribe(data=>{
      this.lstAlbums =data;
    })
  }

  onAlbumSelected(selectedAlbumId:any):void{
    this.freeapiservice.getPhotosForSelectedAlbumByParameter(selectedAlbumId).subscribe(data=>{ 
      
      this.lstPhotos= data //this.freeapiservice.jsonConvert.deserialize(data,Albums)
      console.log(data)
      console.log(Albums)
      
    })
  }

}
