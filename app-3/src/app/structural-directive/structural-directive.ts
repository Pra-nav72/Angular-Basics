import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { single } from 'rxjs';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})
export class StructuralDirective {
  students=signal([
    {name: "Rahul", roll: 99, email: "www@xyz.com", skills: ["java", "html", "MEAN stack"]},
    {name: "Riya", roll: 32, email: "rya@xyz.com", skills: ["python", "rust", "go"]},
    {name: "Shristika", roll: 4, email: "prnv@sAlways.com", skills: ["AI", "ML", "MERN stack"]}
  ]);

  isShow = signal(true);
  isPlay = signal(false);
}
