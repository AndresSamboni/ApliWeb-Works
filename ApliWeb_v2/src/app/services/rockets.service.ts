import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//DEFINE THE INTERFACE BEHAVIOR DIRECTIVE @Injectable
export interface RocketInterface{
  //PARAMETERS TO OBTAIN INFORMATION WITH THE API
  rocket_id: string;
  cost_per_launch: number;
  rocket_name: string;
  height: {meters: number};
  flickr_images: Array<string>;
  company: string;
}
@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  //ATTRIBUTES TO CONNECT WITH THE API
  private rockets: Array<string>;
  private url: string;
  //CONSTRUCTOR
  constructor(private http: HttpClient) {
    this.rockets = new Array<string>();
    this.url = 'https://api.spacexdata.com/v3/rockets/';
  }
  //ROCKETS METHODS
  getRockets():Array<string> {
    return this.rockets;
  }
  setRocket(rocket: string):void {
    this.rockets.push(rocket);
  }
  removeRocket(rocket: string): void{
    this.rockets.splice(this.rockets.indexOf(rocket), 1);
  }
  loadRockets(): Observable<Array<RocketInterface>> {
    return this.http.get<Array<RocketInterface>>(this.url);
  }
}
