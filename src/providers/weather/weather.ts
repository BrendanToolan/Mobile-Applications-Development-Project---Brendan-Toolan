import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  GetWeatherData():Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ce331a50ec651de12f8b4bb3849466c9');
  }

}
