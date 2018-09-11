import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private service: StudentService
  ) { }

  ngOnInit() {
  }

  filter(query:string){
    console.log("Filter" + query);
    this.service.searchActivated.next(query);

  }

}
