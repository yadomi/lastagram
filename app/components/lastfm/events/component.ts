import {Component, View, NgFor} from 'angular2/angular2'

import {LastFMClient} from 'webservices/api-lastfm'
import {LastFMEvent}  from 'components/lastfm/event/component'

@Component({
  selector: 'lastfm-events',
  appInjector: [LastFMClient],
})
@View({
  directives: [NgFor, LastFMEvent],
  templateUrl: 'components/lastfm/events/template.html'
})
export class LastFMEvents {

  private lastFMClient: LastFMClient
  public  events: Array<Object>

  constructor(lastFMClient: LastFMClient) {
    this.lastFMClient = lastFMClient;
    this.init();
  }

  onData(data){
    this.events = data.events.event;
  }

  init(){
    this.lastFMClient.getArtistPastEvent('the+who').then(this.onData.bind(this))
  }
}
