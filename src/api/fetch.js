import Config from './config';

export default class Fetch {
  call = (callback, urlContext) => {
    fetch(Config.protocol + '://' + Config.domain + ':' + Config.port + urlContext)
      .then(res => res.json())
      .then(callback)
  }
}