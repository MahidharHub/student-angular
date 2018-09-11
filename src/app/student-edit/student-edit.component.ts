
import { Component, OnInit, ViewChild,  AfterViewInit, QueryList, ViewChildren  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { StudentService } from '../student.service'
import { Student } from '../models/Student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: string;
  student : Student;
  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private service: StudentService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  
    this.service.getStudentById(this.id).subscribe(res  => {
      this.student = <Student>res;
    });
  }


  onSubmit({value, valid}: {value: Student, valid: boolean}) {
    value.id = this.id ;
    this.route.params.subscribe(params => {
      this.service.updateStudent(value.id, value.firstName, value.lastName, value.enrolledCourse, value.enrolledDate,value.city,value.postcode,value.batch)
      .subscribe(r => this.router.navigate(['student/view']));
    });
      
   
  }



}
