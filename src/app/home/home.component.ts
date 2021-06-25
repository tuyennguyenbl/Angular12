import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public name ="Tuyen Nguyen";
  // public age =25;

  public naturalfood =['Apple','Grape','Mango','Gauva','Cherry'];

  public naturalfood1 =[
    {name:'Apple', price:12 ,discount:true},
    {name:'Mango', price:-22, discount:false},
    {name:'Grape', price:44, discount:true},
    {name:'Gauva', price:67 ,discount:false}
  ];
  constructor() { }

  ngOnInit(): void {
    console.log('naturalfood1 =', this.naturalfood1);
  }

   
  }


