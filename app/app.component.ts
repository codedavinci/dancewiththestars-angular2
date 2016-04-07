import {Component, View } from 'angular2/core';
import {ArtistInput} from "./artist/components/artist-input";
import {ArtistList} from "./artist/components/artist-list";
import {DancerInput} from "./dancer/components/dancer-input";
import {DancerList} from "./dancer/components/dancer-list";
import {ArtistService} from "./services/artist-service";




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
            <button (click)="shuffle()" type="button" class="btn btn-warning center-block">
            <span class="glyphicon glyphicon-random" aria-hidden="true"></span>
            Shuffle</button>
            </div>
            <br/>
            
    <div class="row">
              <div class="col-xs-4 col-xs-offset-2">
                    <ul class="list-group">
                    <li class="list-group-item" *ngFor="#artist of Ashuffled">
                        <label>{{artist.name}}</label>
                    </li>
                    </ul>
              </div> 
              <div class="col-xs-4">

                 <ul class="list-group">
                 <li class="list-group-item" *ngFor="#dancer of Dshuffled">
                    <label>{{dancer.name}}</label>
                </li>
                </ul>
               
            </div>
        </div>
     </div>
    `
   
})

export class AppComponent{
     Dshuffled = [];
     Ashuffled = [];

   constructor(public artistService: ArtistService){} 
    
    shuffle(){
    this.Ashuffled = this.artistService.shuffleCouples(this.artistService.artists);
    this.Dshuffled = this.artistService.shuffleCouples(this.artistService.dancers);
    console.log(this.Ashuffled, this.Dshuffled);
   
    }
 
}

