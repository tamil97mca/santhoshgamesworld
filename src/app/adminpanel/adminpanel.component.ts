import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let result = this.firstMethod(5,10);   // without call back
    console.log(result / 3);      // return value is undefined (or) Nan(Not a Number), reason for execution time is exceed


    // this.firstMethod(5, 10, (result: any) => {         // with callback
    //   console.log(result);
    // })
  }

  firstMethod(a: number, b: number): number | any
  {
    setTimeout(() => {
      return a+b
    }, 2000)
  }

  // firstMethod(a: number, b: number, callback: any): number | any     // with callback
  // {
  //   setTimeout(() => {
  //     callback(a+b)      // manual error handling only write here
  //   }, 2000)
  // }
}
