import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [

    {id:uuid(), name:'krilin',power: 500},
    {id:uuid(), name:'goku',power: 9500},
    {id:uuid(), name:'vegeta',power: 19500}

  ]

  onNewCharacter(character:Character) : void{
    //console.log('MainPage');
    //console.log(character);

    const newCharacter: Character = {id:uuid(), ...character };

    this.characters.push(newCharacter);

  }

  /*onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }*/

    onDeleteCharacterById(id: string){
      this.characters = this.characters.filter((character) => character.id !== id);
    }


}



