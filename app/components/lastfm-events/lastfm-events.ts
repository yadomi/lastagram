import {Component, View, NgFor} from 'angular2/angular2'

import {LastFMClient} from '../../services/lastfm'
import {LastFMEvent}  from '../../components/lastfm-event/lastfm-event'

@Component({
  selector: 'lastfm-events',
  appInjector: [LastFMClient],
  hostListeners: {
    'click': 'onClick()',
  }
})
@View({
  directives: [NgFor, LastFMEvent],
  templateUrl: 'components/lastfm-events/lastfm-events.html'
})
export class LastFMEvents {

  lastFMClient: LastFMClient
  events: Array<Object>

  constructor(lastFMClient: LastFMClient) {
    this.lastFMClient = lastFMClient;
    this.init();
    this.events = [];
  }

  onData(data){
    this.events = data.events.event;
  }

  init(){
    this.lastFMClient.getArtistPastEvent('the+who').then(this.onData.bind(this))
  }

  onClick() {
    console.log('hello');
  }

}