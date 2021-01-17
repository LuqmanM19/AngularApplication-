import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather';
  apiKey = '043024d39bb825d5c7be46773785f20a';

  constructor(private http: HttpClient) {
  }

  getWeatherDataByCoords(lat: any, lon: any){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey)
  
    return this.http.get(this.url, {params});
  }

  getWeatherDataByCityName(city:string){
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params });
  }

}
