import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class icbService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http: Http) {

    }

    searchBooks(name) {
        var url = 'http://api.icarebooks.com/api/values/' + name;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
    searchUsers(name) {
      //var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
      //var url = 'http://localhost:52146/api/user/' + name;
      var url = 'http://api.icarebooks.com/api/user/' + name;
      var response = this.http.get(url).map(res => res.json());
      return response;
  }
  searchTrans(name) {
    //var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var url = 'http://api.icarebooks.com/api/trans/';
    var response = this.http.get(url).map(res => res.json());
    return response;
}
}
