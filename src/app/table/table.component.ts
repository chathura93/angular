import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


   ex = "isha";
   ex2="kr";

  //  student = {
  //    firstName : "THARINDU",
  //    lastName : "Rukshan",
  //    city: "kurunegala"
  //  }

  //  student1 = {
  //   firstName : "Lahiru",
  //   lastName : "Rukshan",
  //   city: "kurunegala"
  // }

  // studentArray :any=[this.student,this.student1]

  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }

}
