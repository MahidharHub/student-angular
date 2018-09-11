import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentService } from './student.service'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { PaginationModule } from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentCreateComponent,
    StudentViewComponent,
    StudentEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
