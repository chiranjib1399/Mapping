import { Component, OnInit } from '@angular/core';
import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript";
import { Country } from "./country";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const jsonObject: any = { 
      "countryName": "Switzerland", 
      "cities": [
          {
              "id": 1,
              "name": "Basel",
              "founded": -200,
              "beautiful": true,
              "data": 123,
              "keywords": ["Rhine", "River"]
          },
          {
              "id": 1,
              "name": "Zurich",
              "founded": 0,
              "beautiful": false,
              "data": "no",
              "keywords": ["Limmat", "Lake"]
          }
      ]
  };

  // Choose your settings
  // Check the detailed reference in the chapter "JsonConvert class properties and methods"
  let jsonConvert: JsonConvert = new JsonConvert();
  jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
  jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
  jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

  // Map to the country class
  let country: Country;
  try {
      country = jsonConvert.deserializeObject(jsonObject, Country);
      country.cities[0].printInfo(); // prints: Basel was founded in -200 and is really beautiful!
  } catch (e) {
      console.log((<Error>e));
  }
  }

}





