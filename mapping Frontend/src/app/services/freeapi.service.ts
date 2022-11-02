import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpParams} from '@angular/common/http';
import { JsonConvert } from 'json2typescript';


@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
  
  jsonConvert: JsonConvert = new JsonConvert();
  constructor(private httpclient: HttpClient) {

   }

   getAblubs(): Observable<any>{
    return this.httpclient.get("https://jsonplaceholder.typicode.com/albums") //Its a fake api link data will get from this, Just for testing purpose.
   }

   getPhotosForSelectedAlbumByParameter(selectedAlbumId:string): Observable<any>{
    let params1 = new HttpParams().set('albumId', selectedAlbumId);
    return this.httpclient.get("https://jsonplaceholder.typicode.com/photos",{params:params1})  //Its a fake api link data will get from this, Just for testing purpose.
   }
}
