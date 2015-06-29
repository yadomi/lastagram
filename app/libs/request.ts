export class Request {

  req: XMLHttpRequest;
  private static instance: Request = new Request()

  constructor(){
    if(Request.instance){
      throw new Error('Error: Use Request.getInstance() instead')
    }
    Request.instance = this
    this.req = new XMLHttpRequest();
  }

  public static getInstance():Request {
      return Request.instance;
  }

  private go(options) {
    let _this = this;
    return new Promise(function(resolve, reject){
      _this.req.open(options.method, options.url, true);
      _this.req.send(options.data || void 0);
      _this.req.onload = function() {
        if([200,300].indexOf(_this.req.status) === -1){
          reject(new Error(_this.req.statusText));
        }
        else{
          resolve(_this.req.responseText);
        }
      };
    });
  }

  public get(url) {
    return this.go({method: 'GET', url: url})
  }

  public jsonp(url, callback = 'callback'){
    return new Promise(function(resolve, reject) {
      callback = callback + Math.round(1000 * Math.random())
      let script = document.createElement('script');

      script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callback;
      script.onerror = reject;
      document.body.appendChild(script);

      window[callback] = function(data) {
        resolve(data);
        window[callback] = null
        delete window[callback]
        document.body.removeChild(script)
      }

    });
  }

}
