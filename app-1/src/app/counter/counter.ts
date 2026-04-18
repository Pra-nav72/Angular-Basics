import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  c = 0;
  handleCount(a:string){
    if(a==='minus'){
      this.c!==0?this.c= this.c-1: this.c
    }
    else if(a==='plus'){
      this.c = this.c + 1
    }
    else{
      this.c = 0
    }
  }
}
