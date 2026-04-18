import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.html',
  styleUrl: './loops.css',
})
export class Loops {

  names = signal(["ram", "shyam","govind", "krishna"]);
  
  userDetail = signal([{
    id: 1,
    name: "Ram",
    roll: 1233,
    div: "c",
    college: "DYPIMCAM",
  }]);
}
