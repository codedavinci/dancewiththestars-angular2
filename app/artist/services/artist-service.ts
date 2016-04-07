import {Injectable} from "angular2/core";
import {ArtistModel} from "./artist-model";

@Injectable()
export class ArtistService{
    artists = [
        new ArtistModel("Thomas Jefferson"),
        new ArtistModel("Bill Gates"),
        new ArtistModel("Barack Obama"),
        new ArtistModel("Steve Jobs"),
        new ArtistModel("Snoop Dog"),
        new ArtistModel("Justin Trudeau")
    ];
    
  addArtist(artist:ArtistModel){
     this.artists = [...this.artists, artist];
    }
    
  removeArtist(artist: ArtistModel){
     artist.toggle();

        const x = this.artists.indexOf(artist);

        this.artists = [
        ...this.artists.slice(0, x),
        artist,
        ...this.artists.slice(x + 1)
        ];


  }
}