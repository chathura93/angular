import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  student = {
    firstName : "",
    lastName : "",
    city: ""
  }
  constructor(private studentService : StudentService) { }


  ngOnInit() {
  }


  clickSubmit(){

    this.studentService.addStudent(this.student);
  
  }


}
