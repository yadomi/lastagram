/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, routerInjectables} from 'angular2/router';

import {LastFMEvents}      from 'components/lastfm/events/component'
import {InstagramPictures} from 'components/instagram/pictures/component'

@Component({
  selector: 'app'
})
@RouteConfig([
  { path: '/',      component: LastFMEvents },
  { path: '/event', component: InstagramPictures, as: 'event' },
])
@View({
  templateUrl: 'app.html',
  directives: [RouterOutlet]
})
class App {

  constructor() {

  }

}

bootstrap(App, [routerInjectables]);
