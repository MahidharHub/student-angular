import { Component, OnInit, ViewChild,  AfterViewInit, QueryList, ViewChildren  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service'
import { FormGroup,  FormBuilder,  Validators,FormControl } from '@angular/forms';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  angForm: FormGroup;
  student: Student;

  

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentService, 
    private formBuilder: FormBuilder) {
    this.createForm();

  }

  createForm() {
    this.angForm = this.formBuilder.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      enrolledCourse: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      enrolledDate: ['', Validators.required],
      batch: ['', Validators.required]
      
       });
  }
  ngOnInit() {
  }


  addStudent(angForm: FormGroup) {
    console.log("Inside ts ::addCandidate ")
    console.log(angForm)
   
    this.route.params.subscribe(params => {
      this.service.addStudent(this.angForm.get('firstName').value,this.angForm.get('lastName').value,this.angForm.get('city').value, this.angForm.get('postcode').value,this.angForm.get('enrolledDate').value,this.angForm.get('batch').value,this.angForm.get('enrolledCourse').value
     )
      .subscribe(r => this.router.navigate(['student/view']));
    });
  }
}
