export class XHR {
  req: XMLHttpRequest;

  constructor(){
    this.req = new XMLHttpRequest();
  }

  _go(options) {
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

  get(url, options = {}) {
    return this._go({method: 'GET', url: url})
  }

}