import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    },
    
    {
      path: 'index',
      component: HomeComponent
    },
    {
      path: 'student/edit/:id',
      component: StudentEditComponent,
      
    },
   
    {
      path: 'student/view',
      component: StudentViewComponent,
      
    },

   
  
    {
      path: 'student/create',
      component: StudentCreateComponent,
      
    },
    {path: '', component:HomeComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }