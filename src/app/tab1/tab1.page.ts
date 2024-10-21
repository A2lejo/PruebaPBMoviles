import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  actual: string = '';
  buttons: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  buttonClicked(button: string) {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.actual = '';
    }else {
      this.actual += button;
    }
  }

  calculate() {
    try {
      this.actual = eval(this.actual);
    } catch (e) {
      this.actual = 'Error';
    }
  }
}