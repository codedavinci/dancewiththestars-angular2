import {Component} from "angular2/core";
import {ArtistService} from '../../services/artist-service';
import {ArtistItemRenderer} from './artist-item-renderer';
import {FilterPipe} from '../../pipes/filter-pipe';

@Component({

    selector: "artist-list",
    pipes: [FilterPipe],
    directives: [ArtistItemRenderer],
    template: `
     <ul class="list-group">
            <li class="list-group-item" *ngFor="#artist of artistService.artists | filter">
            <artist-item-renderer [artist]="artist"
            (deleted)="artistService.removeArtist($event)"></artist-item-renderer>
            </li>
     </ul>
    ` 
})

export class ArtistList{
constructor(public artistService:ArtistService){}
}

