import {Request} from '../libs/request';

let API_ROOT = 'ws.audioscrobbler.com'
let API_VERSION = '2.0'

/* /!\ Personnal apikey, this is really bad, i know */
let API_KEY = '59f553e943f2ea7c9e83f19e113b21b8'

export class LastFMClient {

  apiRoot: string
  protocol: string = 'http://'

  request: Request;

  constructor() {
    this.request = Request.getInstance()
    this.apiRoot = [this.protocol, API_ROOT, API_VERSION].join('/')
  }

  getEventsNear(location){
    let endpoint = `?method=geo.getevents&location=${location}&api_key=${API_KEY}&format=json`
    return this.request.get(this.apiRoot + endpoint).then(JSON.parse)
  }

  getArtistPastEvent(artist){
    let endpoint = `?method=artist.getpastevents&artist=${artist}&api_key=${API_KEY}&format=json`
    return this.request.get(this.apiRoot + endpoint).then(JSON.parse)
  }


}
