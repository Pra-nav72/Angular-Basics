import { Injectable, signal } from '@angular/core';

@Injectable({  // this file can be injected/used in any component(.ts files)
  providedIn: 'root',  // means it will only create 1 instance & can be use anywhere
})
export class Counter {
  count = signal(0);

  decrement(){
    if(this.count()>0){
      this.count.update((c)=>c-1);
    }
  }

  increment(){
    this.count.update((c)=>c+1);
  }

  reset(){
    this.count.set(0);
  }
}
