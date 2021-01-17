import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FlevelService {
  
  constructor(
    private httpClient:HttpClient
  ) { }

  getData(){
    return this.httpClient.get('http://188.166.246.221:8080/api/river/all');
  }

  getLevel(){
    return this.httpClient.get('http://188.166.246.221:8080/api/river/all')
      .map(result => result);
  }

}
