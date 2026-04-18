import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-switch-cases',
  imports: [],
  templateUrl: './switch-cases.html',
  styleUrl: './switch-cases.css',
})
export class SwitchCases {
  status = signal("not started");

  handleSelect(event: Event){
    const target = event.target as HTMLSelectElement;
    this.status.set( target.value)
  }
}
