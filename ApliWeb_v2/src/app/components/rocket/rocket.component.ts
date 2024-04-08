import { Component, Input } from '@angular/core';
import { RocketInterface } from '../../services/rockets.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-rocket',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './rocket.component.html',
  styleUrl: './rocket.component.css'
})
export class RocketComponent {
  //INPUT ATTRIBUTES
  @Input() public rocket: RocketInterface;
  //CONSTRUCTOR
  constructor() {
    this.rocket = {
      rocket_id: '',
      cost_per_launch: 0,
      rocket_name: '',
      height: {meters: 0},
      flickr_images: new Array<string>,
      company: ''
    };
  }
}
