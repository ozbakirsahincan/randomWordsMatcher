import { Component } from '@angular/core';
import {lorem} from 'faker'
// import lorem from "@faker-js/faker"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomText : string = lorem.sentence();
  enteredText : string = '';

  getInputValue(value : string)
  {
    this.enteredText = value; 
    // console.log(this.randomText.split(''));
  }
  compare(randomLetter:string , enteredText: string)
  {
    if(!enteredText)
    {
      return 'pending';
    }

    return randomLetter.toLowerCase() === enteredText.toLowerCase() ? 'correct' : 'incorrect';
  }
}
