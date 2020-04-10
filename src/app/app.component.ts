import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Text2Cells';
  inputText = '';
  outputArray: string[] = [];
  readonly MAX_VALUE = 256;
  clicked: number[] = [];

  refreshOutput() {
    let outputTemp = '';
    this.outputArray = [];
    this.clicked.length = 0;
    for (let i = 0; i < this.inputText.length; i++) {
      const char = this.inputText.charAt(i);
      switch (char) {
        case '\n':
          if (this.inputText.charAt(i - 1) !== '-') {
            outputTemp += ' ';
          }
          break;
        case '\t':
        case '-':
          break;
        default:
          outputTemp += char;
      }
    }
    if (outputTemp.length < this.MAX_VALUE) {
      this.outputArray[0] = outputTemp;
    } else {
      let actualParagraph = 0;
      let end = false;
      let nextCut = this.MAX_VALUE;
      let lastCut = 0;
      do {
        const cutHere = Math.max(
          outputTemp.substring(0, nextCut).lastIndexOf(','),
          outputTemp.substring(0, nextCut).lastIndexOf('.'),
        ) + 1;
        this.outputArray[actualParagraph] = outputTemp.substring(lastCut, cutHere);
        if (outputTemp.length - cutHere < this.MAX_VALUE) {
          end = true;
          this.outputArray[actualParagraph + 1] = outputTemp.substring(cutHere);
        } else {
          nextCut = cutHere + this.MAX_VALUE;
          lastCut = cutHere;
          actualParagraph++;
        }
      } while (!end);
    }
  }

  // Copied from https://stackoverflow.com/questions/49102724/angular-5-copy-to-clipboard
  copy(val: string, index: number) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.clicked.push(index);
  }

}
