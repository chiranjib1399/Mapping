import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("City")
export class City {

   
    id: number =2 ;

    @JsonProperty("name", String)
    name : string = "";

    @JsonProperty("founded", Number)
    private _founded: number = 0;
    get founded() { return this._founded; }

    set founded(value: number) { this._founded = value; }

    @JsonProperty("beautiful", Boolean)
    beautiful: boolean = false;

    @JsonProperty("data") 
    data: any = undefined;

    @JsonProperty("keywords", [String])
    keywords: string[] = [];

    printInfo() {
        if (this.beautiful)
            console.log(this.name + " was founded in " + this.founded + " and is really beautiful!");
        else
            console.log(this.name + " was founded in " + this.founded + ".");
    }

}







