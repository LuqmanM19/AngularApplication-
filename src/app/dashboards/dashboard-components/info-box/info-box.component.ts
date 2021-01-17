import { Component, AfterViewInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements AfterViewInit {

  lat: any;
  lon: any;
  weather: any;
  locationDenied:boolean = true;
  locationDeniedEnableCity = false;
  temp: any;

  constructor(private weatherService: WeatherService) { }

  ngAfterViewInit() {
    this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator)
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon)
          .subscribe(data=>{
            this.weather = data;
            console.log(this.weather);
          });
      }, (error)=>{
        if(error.code == error.PERMISSION_DENIED){
          this.locationDenied = false;
          this.locationDeniedEnableCity = true;
        }
      })
  }

  getCity(city: string){
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
    })
  }

}
