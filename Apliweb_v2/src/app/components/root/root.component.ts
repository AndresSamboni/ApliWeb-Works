import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    InformationComponent
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  // ATTRIBUTES
  public screenWidth: number;
  // CONSTRUCTOR
  constructor() {
    this.screenWidth = window.innerWidth;
  }

  // Method launched right after the constructor
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }
}
