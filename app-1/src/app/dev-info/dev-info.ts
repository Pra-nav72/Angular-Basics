import { Component } from '@angular/core';
import { connect } from 'rxjs';

@Component({
  // changed selecter: app-dev-info
  selector: 'dev-info',
  imports: [],
  templateUrl: './dev-info.html',
  styleUrl: './dev-info.css',
})
export class DevInfo {
  authorName = "pranav kumar";
  authorAge = 22;

  handleClick(){
    console.log(`button clicked by ${this.authorName}`);
    this.otherFuntion(this.authorAge);
  }

  otherFuntion(age: Number){
    // pranav kumar --- split(" ") ---> pranav,kumar ---slice(0, 1)---> pranav
    console.log(`Hmm... So ${this.authorName.split(" ").splice(0, 1)}'s age is ${age}`);
    console.log(this.authorName.split(" ").splice(0, 1));

    //slice() --> create a new sub Array from the existing.
    //splice()  --> extract the original array.
  }
}
