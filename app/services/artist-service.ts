import {Injectable} from "angular2/core";
import {ArtistModel} from "./artist-model";
import {DancerModel} from "./dancer-model";


@Injectable()
export class ArtistService {
  
   artists = [
    
        new ArtistModel("Thomas Jefferson"),
        new ArtistModel("Bill Gates"),
        new ArtistModel("Barack Obama"),
        new ArtistModel("Steve Jobs")
    ];
    
     dancers = [
    
        new DancerModel("Eddie Henrique"),
        new DancerModel("Payman Park"),
        new DancerModel("Howard Grose"),
        new DancerModel("Cleber Harris")
      
    ];
    
    shuffled: string[];
    
  addArtist(artist:ArtistModel){
     this.artists = [...this.artists, artist];
    }
    
  addADancers(dancer:DancerModel){
     this.dancers = [...this.dancers, dancer];
    }
    
    
  removeArtist(artist: ArtistModel){
     artist.deleted();

        const x = this.artists.indexOf(artist);

        this.artists = [
        ...this.artists.slice(0, x),
        artist,
        ...this.artists.slice(x + 1)
        ];


  }
    
  removeDancer(dancer: DancerModel){
        dancer.deleted();

        const x = this.dancers.indexOf(dancer);

        this.dancers = [
        ...this.dancers.slice(0, x),
        dancer,
        ...this.dancers.slice(x + 1)
        ];
  }
    

}