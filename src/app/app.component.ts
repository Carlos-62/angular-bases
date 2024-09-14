import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title: string = 'App Angular';
 public counter: number = 10;

 incrementar(value:number):void {
  this.counter +=value;
 }

 decrementar(value:number):void {
  this.counter -=value;
 }

 RESET():void {
  this.counter =10;
 }
}
