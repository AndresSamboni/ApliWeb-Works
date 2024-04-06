import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  //INPUT ATTRIBUTES
  @Input() public screenW: number;
  //ATTRIBUTES
  private myName: string;
  private teacherName: string;
  //CONSTRUCTOR
  public constructor() {
    this.screenW = window.innerWidth;
    this.myName = 'Edwin Andrés Samboní Ortiz';
    this.teacherName = 'Javier Alexander Hurtado Guaca';
  }
  //GET METHODS
  public getMyName(): string {
    return this.myName;
  }
  public getTeacherName(): string {
    return this.teacherName;
  }
}
