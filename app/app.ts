/// <reference path="../typings/tsd.d.ts" />
import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {InstagramClient} from 'services/instagram';

@Component({
  selector: 'app',
  appInjector: [InstagramClient]
})
@View({
  directives: [NgFor],
  template: '<ul><li *ng-for="#picture of pictures"> hello </li></ul>'
})
class App {

  instagramClient: InstagramClient;
  pictures: Array<Object>;

  constructor(instagramClient: InstagramClient) {
    this.instagramClient = instagramClient;
    this.init();
  }

  onMedia(res) {
    console.log(res.data);
    this.pictures = res.data;
  }  

  init(){
    this.instagramClient.getMedias('hellfest')
      .then(this.onMedia);
  }

}

bootstrap(App);
