import {Request} from '../libs/request';

let ENDPOINT = 'api.instagram.com'
let API_VERSION = 'v1'

let ACCESS_TOKEN = '31003280.5c1de8f.3e76027eeefe429ba5cc90f0e64ccda0'
let CLIENT_ID = '5c1de8fe2653445489b480a72803a44c'

export class InstagramClient {

  endpoint: string
  protocol: string = 'https://'

  request: Request;

  constructor() {
    this.request = Request.getInstance()
    this.endpoint = [this.protocol, ENDPOINT, API_VERSION].join('/')
  }

  getMedias(tag) {
    let ref = `/tags/${tag}/media/recent?access_token=${ACCESS_TOKEN}&callback=callbackInstagram`
    return this.request.jsonp(this.endpoint + ref)
  }

}