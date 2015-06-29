import {Component, View} from 'angular2/angular2'

@Component({
  properties: ['event'],
  selector: 'lastfm-event'
})
@View({
  templateUrl: 'components/lastfm/event/template.html'
})
export class LastFMEvent {

    constructor() {
    }

    onClick() {
      console.log('ehllo');
    }

}
