import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  //METHOD ONINIT
  ngOnInit() {
    initFlowbite();
  }

}
