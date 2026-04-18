import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count:WritableSignal<number> = signal(0);
  updateCount(action: string){
    if(action=='+'){
      this.count.update((c)=> c+1);
    }
    else if(action=='-' && this.count()!=0){
      this.count.update((c)=>c-1);
    }
    else{
      this.count.set(0);
    }
  }
}
