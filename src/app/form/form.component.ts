import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  student = {
    firstName : "THARINDU",
    lastName : "Rukshan",
    city: "kurunegala"
  }
  constructor() { }

  ngOnInit() {
  }

}
