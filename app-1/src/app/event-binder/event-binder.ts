import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-event-binder',
  imports: [],
  templateUrl: './event-binder.html',
  styleUrl: './event-binder.css',
})
export class EventBinder {
  tutorialURL = "https://youtu.be/z5gVEl5QVNk?si=l6hHHH7do7wF-YmQ";
  videoDetails = "#9 Events Explained";

  changes = '';
  eventType: string = "";
  inputData = "";
  isFocused = false;
  pasteData = "";
  cutData = "";
  copyData = "";

  isHover = " ";

  handleInput(event:any){
    console.log(`type of event: ${event.type}`);

    this.eventType = event.type;
    this.changes = event.target.value;
    console.log(`user input/s: ${event.target.value}`);
  
  }
  onChange(event:any){
    this.inputData = event.target.value;
    console.log(`final submitted data: ${this.inputData}`);
  }
  onFocus(){
    this.isFocused = true
  }
  onBlur(){
    this.isFocused = false
  }
  onPaste(event:any){
    this.pasteData = event.clipboardData?.getData('text');
  }
  onCut(event:any){
    this.cutData = event.target.value;
  }
  onCopy(event:any){
    this.copyData = event.target.value;
  }
  onHover(event:any){
    this.isHover = event;
  }
  onLeave(event:any){
    this.isHover = event;
  }
}
