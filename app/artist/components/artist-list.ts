import {Component} from "angular2/core";
import {ArtistService} from '../services/artist-service';
import {ArtistItemRenderer} from './artist-item-renderer';
import {FilterPipe} from '../pipes/filter-pipe';

@Component({

    selector: "artist-list",
    pipes: [FilterPipe],
    directives: [ArtistItemRenderer],
    template: `<div>
     <ul>
        <li *ngFor="#artist of artistService.artists | filter">
       <artist-item-renderer [artist]="artist"
       (toggle)="artistService.removeArtist($event)"></artist-item-renderer>
        </li>
     </ul>
    </div>` 
})

export class ArtistList{
constructor(public artistService:ArtistService){}
}

