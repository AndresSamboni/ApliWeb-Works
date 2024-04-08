import { Component, Input } from '@angular/core';
import { RocketInterface, RocketsService } from '../../services/rockets.service';
import { RocketComponent } from '../rocket/rocket.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgClass,
    RocketComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  //INPUT ATTRIBUTES
  @Input() public screenW: number;
  //ATTRIBUTES
  public minScreen: number;
  public rockets: Array<RocketInterface>;
  private names: Array<string>;
  //CONSTRUCTOR
  public constructor(private service: RocketsService) {
    this.screenW = window.innerWidth;
    this.minScreen = 801;
    this.rockets = new Array<RocketInterface>();
    this.names = service.getRockets();
  }
  //METHOD ONINIT
  public ngOnInit():void {
    this.service.loadRockets().subscribe((newRockets: Array<RocketInterface>) => {
      this.rockets = newRockets;
    });
  }
}
