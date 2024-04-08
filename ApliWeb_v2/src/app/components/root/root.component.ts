//ANGULAR IMPORTS
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

//FLOWBITE IMPORTS
import { initFlowbite } from 'flowbite';

//MY COMPONENTS
import { NavigationComponent } from '../navigation/navigation.component';
import { InformationComponent } from '../information/information.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavigationComponent,
    // InformationComponent
    DashboardComponent
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  //ATTRIBUTES
  public screenW: number;
  //CONSTRUCTOR
  public constructor() {
    this.screenW = window.innerWidth;
  }
  //METHOD ONINIT
  public ngOnInit():void {
    initFlowbite();
    window.onresize = () => {
      this.screenW = window.innerWidth;
    }
  }

}
