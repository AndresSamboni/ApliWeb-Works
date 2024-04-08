import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  //INPUT ATTRIBUTES
  @Input() public screenW: number;
  //ATTRIBUTES
  public minScreen: number;
  //CONSTRUCTOR
  public constructor() {
    this.screenW = window.innerWidth;
    this.minScreen = 801;
  }
  //METHOD REFRESH
  public refresh(): void {
    location.reload();
  }
}
