import {Component, View } from 'angular2/core';
import {ArtistInput} from "./artist/components/artist-input";
import {ArtistList} from "./artist/components/artist-list";
import {DancerInput} from "./dancer/components/dancer-input";
import {DancerList} from "./dancer/components/dancer-list";




@Component({
    selector: 'my-app',
    directives: [ArtistInput, ArtistList, DancerList, DancerInput],
    template: `
     <header> 
       <h1>Dancing With The Stars</h1>
    </header>
    <div class ="container">
        <div class="row">
                <div class="col-xs-6">
                    <div>
                    <artist-input></artist-input>
                    <artist-list [status]="'started'"></artist-list>
                    </div>
                </div>
                <div class="col-xs-6">
                  <div>
                    <dancer-input></dancer-input>
                    <dancer-list [status]="'started'"></dancer-list>
                  </div>
                </div>
        </div>
            
        <div>
         <button type="button" class="btn btn-warning center-block">
        <span class="glyphicon glyphicon-random" aria-hidden="true"></span>
        Shuffle</button>
        </div>
        <div class="row">
          <div class="col-xs-12">
       
          </div>  
        </div>
     </div>
    `
   
})

export class AppComponent{}

