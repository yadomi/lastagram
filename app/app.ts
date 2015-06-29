/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

import {LastFMEvents}      from 'components/lastfm/events/component'
import {InstagramPictures} from 'components/instagram/pictures/component'
import {InstagramPicture}  from 'components/instagram/picture/component'

import {Geo} from 'services/geo'

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app.html',
  directives: [LastFMEvents, InstagramPictures]
})
class App {

  public pictures: Array<InstagramPicture>

  constructor() {
    Geo.getInstance().getCity().then(console.log.bind(console))
  }

}

bootstrap(App);
