/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {LastFMEvents} from 'components/lastfm-events/lastfm-events'

@Component({
  selector: 'app'
})
@View({
  directives: [LastFMEvents],
  templateUrl: 'app.html'
})
class App {

  constructor() {
  }

}

bootstrap(App);
