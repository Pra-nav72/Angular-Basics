import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-about-signals',
  imports: [],
  templateUrl: './about-signals.html',
  styleUrl: './about-signals.css',
})
export class AboutSignals {
  // simple property
  count = 0;

  // signal property definations
  increment = signal(0);

  constructor(){
    // effect() used to show the latest value of signal() & can only be called from constructor
    // this shows the incremented value of the increment(). << we can't do this for coutn>>
    effect(()=>{
      console.log(`new incremented value: ${this.increment()}`);
    });
    effect(()=>{
      const area = this.area();
      console.log(`size of area: ${area}`);
    });
    effect(()=>console.log(`size: ${this.size()}`));
  }

  onClick(){
    // both are incrementing, but we can find if increment()'s value changed in .ts or not
    // but we can't find the count value changed or not.
    // i.e. using signal() we can track value of the variable in UI as well as in .ts file
    this.count++

    // set signal value
    // this.increment.set(1);

    // update value based on previos value
    this.increment.update(c => c+1);
  }

  // ***** computed (derived) signal ************
  width = signal(20);
  height = signal(30);
  size = computed(()=>{
    if(this.area()>=800 && this.area() < 1500) {
      return 20;
    }
    if(this.area() >= 1500){
      return 30;
    }
    return 12;
  });

  // computed signal(derived signal) ==> derived from width() and height()
  area = computed(()=>this.width() * this.height());

  updateWidth(){
    this.width.update((c)=> c+10);
  }
  updateHeight(){
    this.height.update((c)=>c+10);
  }


}
