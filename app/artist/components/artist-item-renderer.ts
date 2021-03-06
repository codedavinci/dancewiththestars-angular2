import {Component, Input, Output, EventEmitter} from "angular2/core";

    
    @Component({
        selector: 'artist-item-renderer',
        template: `
        <style>
        .completed{
            text-decoration: line-through;
        }
        </style>
        <label [ngClass]="artist.status">{{artist.name}}</label>
        <button type="button" class="btn btn-danger pull-right" (click)="deleted.emit(artist)">Remove</button>
        `  
    })

export class ArtistItemRenderer{
    @Input() artist;
    @Output() deleted = new EventEmitter();
}