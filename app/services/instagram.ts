import {XHR} from '../libs/xhr';

let ENDPOINT = 'api.instagram.com'
let API_VERSION = 'v1'

let ACCESS_TOKEN = '31003280.5c1de8f.3e76027eeefe429ba5cc90f0e64ccda0'
let CLIENT_ID = '5c1de8fe2653445489b480a72803a44c'

export class InstagramClient {

  endpoint: string
  protocol: string = 'https://'

  xhr: XHR;

  constructor() {
    this.xhr = new XHR();
    this.endpoint = [this.protocol, ENDPOINT, API_VERSION].join('/')
  }

  getMedias(tag){
    let ref = `/tags/${tag}/media/recent?access_token=${ACCESS_TOKEN}&callback=callbackInstagram`
    return this.xhr.jsonp(this.endpoint + ref).then(console.log.bind(console))
  }

}