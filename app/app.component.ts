import {Component, View } from 'angular2/core';
import {ArtistInput} from "./artist/components/artist-input";
import {ArtistList} from "./artist/components/artist-list";




@Component({
    selector: 'my-app',
    directives: [ArtistInput, ArtistList],
    template: `<div class="container">
        <div class="span4">
            <div>
            <artist-input></artist-input>
            <artist-list [status]="'started'"></artist-list>
            </div>
        </div>
    </div>`
   
})

export class AppComponent{}

