import { StudentNewComponent } from './student-new/student-new.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: StudentsComponent},
  {path: 'detail/:index',component: StudentDetailsComponent},
  {path: 'edit/:index',component: StudentEditComponent},
  {path: 'new',component: StudentNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

/* {path: 'view/:title', component: VideoDetailsComponent},
  {path: 'edit/:title', component: VideoEditComponent},
  {path: 'edit/', component: VideoEditComponent}*/