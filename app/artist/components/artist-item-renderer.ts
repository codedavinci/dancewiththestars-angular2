import {Component, Input, Output, EventEmitter} from "angular2/core";

    
    @Component({
        selector: 'artist-item-renderer',
        template: `
        <style>
        .completed{
            text-decoration: line-through;
        }
        </style>
        <div>
        <span [ngClass]="artist.status">{{artist.name}}</span>
        <button (click)="toggle.emit(artist)">Detele</button>
        </div>
        `  
    })

export class ArtistItemRenderer{
    @Input() artist;
    @Output() toggle = new EventEmitter();
}