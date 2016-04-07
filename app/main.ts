import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ArtistService} from './services/artist-service';


bootstrap(AppComponent, [ArtistService]);
