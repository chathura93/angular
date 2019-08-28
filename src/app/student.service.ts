import { Injectable } from '@angular/core';
import {FormComponent} from './form/form.component';
import {TableComponent} from './table/table.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { 
    console.log("service")
  }
  student = {
    firstName : "THARINDU",
    lastName : "Rukshan",
    city: "kurunegala"
  }

  student1 = {
   firstName : "Lahiru",
   lastName : "Rukshan",
   city: "kurunegala"
 }

 studentArray :any=[this.student,this.student1]


addStudent(student){
  console.log(student.firstName);
  this.studentArray.push(student)

}
removeStudent(){
  console.log("remove student"),
  this.studentArray.pop(this.student)
}


}
