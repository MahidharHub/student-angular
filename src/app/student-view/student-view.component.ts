import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  students: Student[] = [];
  object : Object;
  student:Student;
  id:any;

  //filterStudents: Student[] = [];
  @Input('data') filteredStudents: Student[] = [];
  page: number = 1;


  query : string ;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  
  ) { }

  
  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students as Student[] ;
      this.filteredStudents = this.students;
    
      //console.log("Object == : " +  this.object);
      //console.log(JSON.stringify(this.object));
      //console.log(JSON.parse(JSON.stringify(this.object)));
    //let studentParse =  JSON.parse(JSON.stringify(this.object));
    //this.students = studentParse._embedded.students;
    });
  

    this.studentService.searchActivated.subscribe(
      (query: string) => {
      this.query = query;
      this.filterValues(this.query);
    }); 

  }

  onSubmit({value, valid}: {value: Student, valid: boolean}) {
   
    this.id = value.id;
    console.log("Value ==" + value.id);
   this.router.navigate(['/student/edit/', this.id]);
   
  }

  deleteStudent(id : string){
    console.log("From Deletee== :" + id);
   
    this.route.params.subscribe(params => {
      this.studentService.deletePersonal(id)
      .subscribe(r => {
        this.studentService.getStudents().subscribe(students => {
          this.students = students as Student[] ; 
          this.filteredStudents = this.students;
        });
        this.router.navigate(['student/view'])
       
      }
    
    );
    });
  }

  filterValues(query:string){
    this.filteredStudents = (query) ?
    this.students.filter(p => 
      p.firstName.toLowerCase().includes(query.toLowerCase()) 
      || p.lastName.toLowerCase().includes(query.toLowerCase())
      || p.lastName.toLowerCase().includes(query.toLowerCase())
      || p.enrolledCourse.toLowerCase().includes(query.toLowerCase())
      || p.city.toLowerCase().includes(query.toLowerCase())
      || p.batch.toLowerCase().includes(query.toLowerCase())
   ) :  this.students

  }

 

}
