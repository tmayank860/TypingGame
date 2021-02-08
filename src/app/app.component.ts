import { Component,ViewChild } from '@angular/core';
import {lorem} from 'faker'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText=lorem.sentence();
  enteredText="";
  @ViewChild('text') inputName;

  onInput(value:string){
    this.enteredText=value;
  }
  compareCharacter(randomChar:string,enteredChar:string){
    if(!enteredChar){
      return 'pending';
    }else if(randomChar===enteredChar){
      return 'matching';
    }else{
      return 'different'
    }
  }
  tryAgain(){
    this.randomText=lorem.sentence();
    this.enteredText="";
    this.inputName.nativeElement.value = '';
    
    
  }
}
