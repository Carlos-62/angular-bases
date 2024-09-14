import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string ='ironman';
  public age: number =45;

  get capitalizedName():string{
    return this.name.toUpperCase();

  }

  public getheroDescription():string{
    return `${this.name} - ${this.age}`
  }

  public changeHero():void{
    this.name = "Superman";
  }

  public changeEdad():void{
    this.age=25;
  }

  public resetForm():void{
    this.name="iroman";
    this.age = 45;
  }

}
