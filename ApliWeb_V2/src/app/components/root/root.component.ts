import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

}
