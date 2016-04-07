import {Component} from 'angular2/core';
import {ArtistService} from '../services/artist-service';
import {ArtistModel} from '../services/artist-model';

@Component({
    selector: 'artist-input',
    template: `
    <input type="text" [(ngModel)]="artistModel.name">
    <button (click)="onClick()">Add Artist</button>
    `
})

export class ArtistInput {
 artistModel:ArtistModel = new ArtistModel();
 constructor(public artistService: ArtistService){}
    
    onClick(){
    this.artistService.addArtist(this.artistModel);
    console.log(this.artistService.artists);
    this.artistModel = new ArtistModel();
    }
 
}