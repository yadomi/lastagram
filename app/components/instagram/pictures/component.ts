import {Component, View, NgFor} from 'angular2/angular2'
import {InstagramClient} from 'webservices/api-instagram'

import {InstagramPicture} from 'components/instagram/picture/component'

@Component({
  selector: 'instagram-pictures',
  appInjector: [InstagramClient]
})
@View({
  templateUrl: 'components/instagram/pictures/template.html',
  directives: [NgFor, InstagramPicture]
})
export class InstagramPictures {

  private instagram: InstagramClient
  private pictures: Array<Object>

  constructor(instagram: InstagramClient) {
    this.instagram = instagram;
    this.init();
  }

  init() {
    this.instagram.getMedias('hellfest2015').then(this.onData.bind(this))
  }

  onData(res){
    this.pictures = res.data;
  }

}
