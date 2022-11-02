import { City } from "./city";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Country")
export class Country {

    @JsonProperty("countryName", String)
    name: string = "";

    @JsonProperty("cities", [City])
    cities: City[] = [];
} 