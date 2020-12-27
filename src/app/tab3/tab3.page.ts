import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;
  num6: number;
  num7: number;
  num8: number;
  num9: number;
  num10: number;
  num11: number;
  num12: number;
  num13: number;
  num14: number;
  num15: number;
  compound: number = 0;
  growth: number = 0;
  diff: number = 0;
  total: number = 0;
  selection: string;
  currency: string = '$';
  eq1: string = 'true';
  eq2: string;
  eq3: string;
  eq4: string;
  eq5: string;
  eq6: string;
  eq7: string;
  eq8: string;
  eq9: string;
  advanced1: boolean;
  advanced2: boolean;
  advanced7: boolean;

  currency1 (event){
    this.currency = event.target.value;
  }
  check(event) {
    console.log('radioGroupChange',event.detail);
    this.selection = event.target.value;
    if (this.selection == 'eq1'){
      this.eq1 ='true';
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
      this.eq7 = null;
      this.eq8 = null;
      this.eq9 = null;
    } else if (this.selection == 'eq2'){
      this.eq1 = null;
      this.eq2 = 'true';
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
      this.eq7 = null;
      this.eq8 = null;
      this.eq9 = null;
    } else if (this.selection == 'eq3'){
      this.eq1 = null;
      this.eq2 = null;
      this.eq3 = 'true';
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
      this.eq7 = null;
      this.eq8 = null;
      this.eq9 = null;
    } else if (this.selection == 'eq4'){
      this.eq1 = null;
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = 'true';
      this.eq5 = null;
      this.eq6 = null;
      this.eq7 = null;
      this.eq8 = null;
      this.eq9 = null;
    } else if (this.selection == 'eq5'){
      this.eq1 = null;
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = 'true';
      this.eq6 = null;
      this.eq7 = null;
      this.eq8 = null;
      this.eq9 = null;
    } else if (this.selection == 'eq6'){
      this.eq1 = null;
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = 'true';
      this.eq7 = null;
      this.eq8 = null;
      this.eq9 = null;
    } else if (this.selection == 'eq7'){
      this.eq1 = null;
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
      this.eq7 = 'true';
      this.eq8 = null;
      this.eq9 = null;
    } else if (this.selection == 'eq8'){
      this.eq1 = null;
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
      this.eq7 = null;
      this.eq8 = 'true';
      this.eq9 = null;
    } else if (this.selection == 'eq9'){
      this.eq1 = null;
      this.eq2 = null;
      this.eq3 = null;
      this.eq4 = null;
      this.eq5 = null;
      this.eq6 = null;
      this.eq7 = null;
      this.eq8 = null;
      this.eq9 = 'true';
    }
  }

  calculate(){
    this.compound = Math.pow(((this.num11+100)/100),this.num12)*this.num10;
  }

  calculate2(){
    this.growth = Math.pow(((this.num14+100)/100),this.num15)*this.num13;
    this.diff = this.growth - this.num13;
    this.total = this.diff / this.num13 * 100;
  }

  constructor(public alertController: AlertController) {
  }

}
