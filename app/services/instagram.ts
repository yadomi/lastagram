import {XHR} from '../libs/xhr';

export class InstagramClient {

  endpoint: string;
  protocol: string;
  token:    string;

  xhr: XHR;

  constructor() {
    this.protocol = 'https://'
    this.endpoint = 'api.instagram.com'
    this.token = '31003280.5c1de8f.3e76027eeefe429ba5cc90f0e64ccda0' //For debugging only

    this.xhr = new XHR();
  }

  getMedias(tag){
    let url = '/tags/' + tag + '/media/recent';
    return this.xhr.get(this.protocol + this.endpoint + url).then(console.log.bind(console))
  }


}