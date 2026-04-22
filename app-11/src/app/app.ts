import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // (step:3) viewChild() is a decorator to read the container 
  // it takes 2 params, 1.name of container, 
  // 2. viewContainerRef = it takes reference of the container, after which we can perform
  //  various activities like loading component, creating element etc
  @ViewChild("user", {read:ViewContainerRef})
  
  // (step:4) take a property (any name) with its type i.e. viewConatainerRef | underfined
  user!: ViewContainerRef;  // ! means it can be undefined

  async loadComponent(){
    // to clear existing loaded component and create fresh new
    this.user?.clear();

    // (step:5) import the component you want to load on button click
    const {UserDetails} = await import('./user-details/user-details');

    // load the component using the references we have taken(user)
    this.user?.createComponent(UserDetails);
    //new component will be created without removing older on, after each button click
    // to correct this we have use this.user?.clear() at top to clear before loading new.
  }
}
