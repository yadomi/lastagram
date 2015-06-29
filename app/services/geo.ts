import {Request} from '../libs/request';

let GOOGLEMAPS_GEOCODE = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='

export class Geo {

  private static instance: Geo = new Geo()
  private request: Request;

  constructor() {
    if(Geo.instance){
      throw new Error('Error: Use Geo.getInstance() instead')
    }
    Geo.instance = this
    this.request = Request.getInstance()
  }

  public static getInstance():Geo {
      return Geo.instance;
  }

  public getCity() {
    return this.getCurrentPosition()
      .then(this.getNearestCities.bind(this))
  }

  public getCurrentPosition() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            resolve({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
        });
    });
  }

  private getNearestCities(coords) {
    let endpoint = GOOGLEMAPS_GEOCODE + coords.lat + ',' + coords.lng + '&sensor=true';
    console.log(this);
    return this.request.get(endpoint).then(function(res: string){
      return JSON.parse(res).results[1].formatted_address;
    });
  }


}