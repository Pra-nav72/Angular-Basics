import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  signUp = new FormGroup({
    // 2nd parameter of the form control is an array for validations
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  });

  // this is required to run hasError in html
  get name(){
    return this.signUp.get("name");
  }
  get email(){
    return this.signUp.get("email");
  }
  get gender(){
    return this.signUp.get("gender");
  }
  get password(){
    return this.signUp.get("password");
  }

  handleSignUp(){
    console.log(this.signUp.value);
    
  }
}
