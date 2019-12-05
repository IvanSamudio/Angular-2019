import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  getBeers(){
    return this.http.get('https://semangular-15f61.firebaseio.com/Beer.json')
                     .map(response =>
                     {
                       let beers = response;
                       return <[]>Object.keys(beers).map(key => Object.assign({ key }, beers[key]));
                     });
  }
}
