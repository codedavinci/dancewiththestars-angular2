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
        ...this.artists.slice(0, x)
        ];
        
        console.log(this.artists);

  }
    
  removeDancer(dancer: DancerModel){
        dancer.deleted();

        const x = this.dancers.indexOf(dancer);

        this.dancers = [...this.dancers.slice(0, x)];
         console.log(this.dancers);
  }
    

    
  shuffleCouples(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
    }
}