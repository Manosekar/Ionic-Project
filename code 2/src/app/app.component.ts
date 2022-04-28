import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor() { }
  prevvalue = 0;
  currvalue = 0;
  addclicked = false;
  multiplyclicked = false;
  divclicked = false;
  minclicked = false;
  append = true;
  calc: string = '0';

  addToCalc(n: any) {
    if (this.calc === '0' || !this.append)
      this.calc = n;
    else
      this.calc = this.calc + '' + n;

   this.append = true;   
  }
  answer() {
    if (this.anycalcbuttonclicked()) {
      this.currvalue = Number(this.calc);
    }
    if (this.addclicked) {
      this.calc = (this.prevvalue + this.currvalue).toString();
    }
    else if(this.minclicked){
      this.calc = (this.prevvalue - this.currvalue).toString();
    }
    else if(this.divclicked){
      this.calc = (this.prevvalue / this.currvalue).toString();
    }
    else if(this.multiply){
      this.calc = (this.prevvalue * this.currvalue).toString();
    }
    this.reset();
    this.append = false;
  }
  anycalcbuttonclicked() {
    return this.addclicked || this.minclicked || this.multiplyclicked || this.divclicked;
  }
  reset() {
    this.prevvalue = 0;
    this.currvalue = 0;
    this.addclicked = false;
    this.multiplyclicked = false;
    this.divclicked = false;
    this.minclicked = false;
    // this.calc = '0';

  }
  clearall() {
    this.reset();
    this.calc = '0';
  }
  butinit(){
    this.prevvalue = Number(this.calc);
    this.append = false;

  }
  add() {
    this.butinit();
      this.addclicked = true;
  }

  subtract() {
    this.butinit();
      this.minclicked = true;
  }

  multiply() {
    this.butinit();
      this.multiplyclicked = true;
  }
  divide() {
    this.butinit();
    this.divclicked = true;
  }
}
