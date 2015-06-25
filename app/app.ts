/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {InstagramClient} from 'services/instagram';


var instagram = new InstagramClient();
instagram.getMedias('hellfest');

@Component({
  selector: 'app'
})
@View({
  template: '<h1>Welcome !</h1>'
})
class App {

}

bootstrap(App);
