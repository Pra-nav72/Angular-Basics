import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { single } from 'rxjs';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css',
})
export class TwoWayDataBinding {
  name = signal("Pranav Kumar");

  // simple propery
  // age = 0;  ----> ngModel can handle ony these simple property

  // for signals, we have to use getter & setter to use in ngModel
  age = signal(0);

  // getter/setter name should not be same to the variable name(age())
  get uAge(){
    return this.age();
  }

  set uAge(val:number){
    this.age.set(val)
  }

  user = signal({
    name: "pranav",
    age: 22,
    email: "pranav@pk.com",
  });
}
