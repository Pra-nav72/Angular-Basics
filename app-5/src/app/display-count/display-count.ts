import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-display-count',
  imports: [],
  templateUrl: './display-count.html',
  styleUrl: './display-count.css',
})
export class DisplayCount {
  // injecting the service (public to use in html too)
  constructor(public state: Counter){  // a service is often called as state/store
    
  }
}
