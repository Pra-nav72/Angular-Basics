import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // (step-1.0) impert ReactiveFormsModule
  //(step-1.1) FormControl helps to bind the input field 
  email:FormControl = new FormControl("");
  password = new FormControl("");

  logThis(){
    console.log(`email: ${this.email.value}, pass: ${this.password.value}`);
  }
  // reseting the value 
  reset(){
    this.email.setValue("");
    this.password.setValue("");
  }
}
