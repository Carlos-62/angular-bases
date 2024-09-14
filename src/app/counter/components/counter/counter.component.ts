import { Component } from "@angular/core";




@Component({
  selector: 'app-counter',
  template: `<h1>Counters</h1>
  <h3>Counter: {{counter}}</h3>

<button (click)="incrementar(1)" >+1</button>
<button (click)="RESET()">RESET</button>
<button (click)="decrementar(1)" >-1</button>

`
})
export class CounterComponet {
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
