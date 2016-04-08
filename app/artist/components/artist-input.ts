import {Component} from 'angular2/core';
import {ArtistService} from '../../services/artist-service';
import {ArtistModel} from '../../services/artist-model';

@Component({
    selector: 'artist-input',
    template: `
    <div class="input-group">
     <input type="text" #artist class="form-control" placeholder="Add an artist.." [(ngModel)]="artistModel.name" required>
    <span class="input-group-btn">
    <button class ="btn btn-success" type="button"(click)="onClick(artist.value)">Add</button>
    </span>
    </div>
    `
})

export class ArtistInput {
 artistModel:ArtistModel = new ArtistModel();
 constructor(public artistService: ArtistService){}
    
    onClick(artist){
        if(artist){
        this.artistService.addArtist(this.artistModel);
        console.log(this.artistService.artists);
        this.artistModel = new ArtistModel();
        }
     }
 
}