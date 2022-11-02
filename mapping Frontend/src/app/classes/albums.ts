import { Any, JsonConverter, JsonCustomConvert, JsonObject, JsonProperty } from "json2typescript";


@JsonObject("Albums")
export class Albums
{
   @JsonProperty()
    userId!: number;
    @JsonProperty()
    id!: number;
    @JsonProperty("Name", String)
    title: string= "";
}


// @JsonObject("NewAlbum")
// export class NewAlbum
// {
//     @JsonProperty("Phototype",[Albums],false)
//     Phototype: Albums[] =[];
// }