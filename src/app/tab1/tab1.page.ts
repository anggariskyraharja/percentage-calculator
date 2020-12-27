import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  num1: number;
  num2: number;
  selection: string;
  eq1: string = 'true';
  eq2: string;
  eq3: string;
  eq4: string;
  eq5: string;
  eq6: string;

  check(event) {
    console.log('radioGroupChange',event.detail);
    this.selection = event.target.value;
    if (this.selection == 'eq1'){
      this.eq1 =' true';
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
    } else if (this.selection == 'eq2'){
      this.eq2 =' true';
      this.eq1 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
    } else if (this.selection == 'eq3'){
      this.eq3 =' true';
      this.eq2 = null;
      this.eq1 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
    } else if (this.selection == 'eq4'){
      this.eq4 =' true';
      this.eq2 = null;
      this.eq3 = null;
      this.eq1 = null;
      this.eq5 = null;
      this.eq6 = null;
    } else if (this.selection == 'eq5'){
      this.eq5 =' true';
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq1 = null;
      this.eq6 = null;
    } else if (this.selection == 'eq6'){
      this.eq6 =' true';
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq1 = null;
    }
  }

  constructor(public alertController: AlertController) {
  }

}
