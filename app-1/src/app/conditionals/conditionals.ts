import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  imports: [],
  templateUrl: './conditionals.html',
  styleUrl: './conditionals.css',
})
export class Conditionals {
  isLogin:WritableSignal<string | boolean> = signal(true);
  isOn = signal("Log out");
  toggle(){
    if(this.isLogin()){
      this.isOn.set("Log In");
      this.isLogin.set(false);  
    }
    else{
      this.isOn.set("Log Out");
      this.isLogin.set(true);
    }
  }
}
