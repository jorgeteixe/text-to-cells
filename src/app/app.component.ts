import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Text2Cells';
  inputText: string;
  outputArray: string[] = [];

  refreshOutput() {
    let outputTemp: string = "";
    this.outputArray = [];
    for (var i = 0; i < this.inputText.length; i++) {
      let char = this.inputText.charAt(i);
      switch(char) {
        case '\n':
        case '\t':
        case '-':
          break;
        default:
          outputTemp += char;
      }
    }
    if(outputTemp.length<256) {
      this.outputArray[0] = outputTemp;
    } else {
      
    }
  }

}
