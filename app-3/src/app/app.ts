import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirective } from './structural-directive/structural-directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, StructuralDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isUser= signal(true);
  names = signal(["Ram", "Shyam", "Mohan"]);
  colorRed = "Red";
  colorViolet = "BlueViolet";
}
