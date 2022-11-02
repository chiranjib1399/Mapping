import { Component , OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript"
import { Country } from "./map/country";
import { FreeapiService } from './services/freeapi.service';
import { Albums } from './classes/albums';
import { Photos } from './classes/photos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private freeapiservice : FreeapiService){

  }

 


  ngOnInit(): void {
   
  }
    

}



