import {Component} from "angular2/core";
import {ArtistService} from '../../services/artist-service';
import {FilterPipe} from '../../pipes/filter-pipe';
import {DancerItemRenderer} from './dancer-item-renderer';

@Component({

    selector: "dancer-list",
    pipes: [FilterPipe],
    directives: [DancerItemRenderer],
    template: `
     <ul class="list-group">
            <li class="list-group-item" *ngFor="#dancer of artistService.dancers | filter">
            <dancer-item-renderer [dancer]="dancer"
            (deleted)="artistService.removeDancer($event)"></dancer-item-renderer>
            </li>
     </ul>
    ` 
})

export class DancerList{
constructor(public artistService:ArtistService){}
}
