import {Component} from 'angular2/core';
import {ArtistService} from '../../services/artist-service';
import {ArtistModel} from '../../services/artist-model';
import {DancerModel} from '../../services/dancer-model';

@Component({
    selector: 'dancer-input',
    template: `
    <div class="input-group">
     <input type="text" class="form-control" placeholder="Add a dancer.." [(ngModel)]="dancerModel.name">
    <span class="input-group-btn">
    <button class ="btn btn-success" type="button"(click)="onClick()">Add</button>
    </span>
    </div>
    `
})

export class DancerInput {
 dancerModel:DancerModel = new DancerModel();
 constructor(public artistService: ArtistService){}
    
    onClick(){
    this.artistService.addADancers(this.dancerModel);
    console.log(this.artistService.dancers);
    this.dancerModel = new DancerModel();
    }
 
}