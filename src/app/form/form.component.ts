import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  student = {
    firstName : "THARINDUWa",
    lastName : "Rukshan",
    city: "kurunegala"
  }
  constructor() { }


  ngOnInit() {
  }


  clickSubmit(){
    alert("click submit button ")
  }


}
