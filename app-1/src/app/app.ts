import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevInfo } from './dev-info/dev-info';
import { Counter } from './counter/counter';
import { EventBinder } from './event-binder/event-binder';
import { AboutSignals } from './about-signals/about-signals';
import { CounterApp } from './counter-app/counter-app';
import { Conditionals } from './conditionals/conditionals';
import { Loops } from './loops/loops';
import { SwitchCases } from './switch-cases/switch-cases';
import { TwoWayDataBinding } from './two-way-data-binding/two-way-data-binding';

@Component({
  selector: 'app-root',
  imports: [DevInfo, Counter, EventBinder, AboutSignals,
     CounterApp, Conditionals, Loops, SwitchCases, TwoWayDataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-1');
}
