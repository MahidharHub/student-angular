import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { Student } from './models/Student';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class StudentService {
  searchActivated = new Subject();
  result: any;
  datePipeEn: DatePipe = new DatePipe('en-US');
  students: Observable<Student[]>;
  constructor(private http: HttpClient) { }

  addStudent(firstName, lastName, city, postcode,enrolledDate,batch,enrolledCourse) {
    console.log("InsideService ::addStudent ")
  
    const pipe = new DatePipe('en-GB');
    enrolledDate = pipe.transform(enrolledDate, 'MM/dd/yyyy');
    const obj = {
  
      firstName: firstName,
      lastName: lastName,
      city: city,
      postcode: postcode,
      enrolledDate: enrolledDate,
      batch: batch,
      enrolledCourse: enrolledCourse
   
    };
    console.log("InsideService ::before http post :::::" + obj.enrolledDate);
    return this.http.post(environment.student.getAllUrl, obj);
  }


  getStudents() : Observable<Object> {
    return this
            .http
             .get(environment.student.getAllUrl)
            .map(res => {
              return res;
            });
  }

  getStudentById(id) {

    return this
            .http
             .get(environment.student.getByIdUrl(id))
            .map(res => {
              return res;
            });
  }


  updateStudent(id,firstName, lastName, enrolledCourse,enrolledDate,city, postcode,batch) {
    console.log("InsideService ::updateStudent ")
  
    const pipe = new DatePipe('en-GB');
    enrolledDate = pipe.transform(enrolledDate, 'MM/dd/yyyy');

    const obj = {
       id : id,
       firstName: firstName,
      lastName: lastName,
      city: city,
      postcode: postcode,
      enrolledDate:enrolledDate,
      batch: batch,
      enrolledCourse: enrolledCourse
   
    };
    console.log("Student details  ==" + id + firstName + lastName + city + enrolledCourse);
   
    return this.http.put(environment.student.getByIdUrl(obj.id), obj);
  }

  deletePersonal(id) {

    return this
        .http
        .delete(environment.student.getByIdUrl(id))
        .map(res => {
          return res;
        });
  }


}
